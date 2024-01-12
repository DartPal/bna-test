import {createContext, FC, ReactNode} from 'react';

interface IUserContext {
    firstName: string;
    lastName: string;
    avatar?: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

interface IProps {
    children: ReactNode;
}

export const UserContextProvider: FC<IProps> = ({ children }) => {

    return (
        <UserContext.Provider value={{
            firstName: "Peter",
            lastName: "Morgan"
        }}>
            {children}
        </UserContext.Provider>
    )
}
