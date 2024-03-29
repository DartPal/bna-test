import { useContext } from 'react';
import { UserContext } from '../../context/user_context';

export const useUserContext = () => {
    return useContext(UserContext);
};
