'use client';

import { useEffect, useState } from 'react';

export const useWindowResize = () => {
    // const initialValue = typeof window !== undefined ? window.innerWidth : 0;

    // console.log('window.innerWidth', window.innerWidth);

    const [width, setWidth] = useState<any>(0);

    const onResize = () => {
        typeof window !== undefined && setWidth(window.innerWidth);
    };

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return width;
};
