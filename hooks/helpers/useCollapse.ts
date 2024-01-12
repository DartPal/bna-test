import { useCallback, useEffect, useRef, useState } from 'react';

const useCollapse = (defaultState: boolean = false) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    const [height, setHeight] = useState<'auto' | number>('auto');

    const contentStyles: React.CSSProperties = {
        height,
        opacity: !maxHeight ? 0 : 1,
        position: !maxHeight ? 'absolute' : 'relative',
        transition: !maxHeight ? undefined : 'all 0.3s',
        overflow: 'hidden',
    };

    useEffect(() => {
        if (!contentRef.current) return;

        const clientHeight = contentRef.current?.clientHeight;

        setHeight(defaultState ? clientHeight : 0);

        requestAnimationFrame(() => {
            setMaxHeight(clientHeight);
        });
    }, [defaultState]);

    const onToggle = useCallback(() => {
        setHeight((prev) => (prev === 0 ? maxHeight : 0));
    }, [setHeight, maxHeight]);

    return {
        onToggle,
        isOpened: height !== 0,
        contentRef,
        contentStyles,
    };
};

export default useCollapse;
