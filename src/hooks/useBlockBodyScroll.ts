'use client';

import { useEffect } from 'react';

export const useBlockBodyScroll = (isBlock: boolean) => {
    useEffect(() => {
        document.body.style.overflow = isBlock ? 'hidden' : 'hidden auto';
    }, [isBlock]);
};
