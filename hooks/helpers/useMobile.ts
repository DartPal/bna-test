import { useEffect, useState } from 'react';

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleWindowSizeChange() {
            if (document.documentElement.clientWidth < 1190) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return {
        isMobile,
    };
};
