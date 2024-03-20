import { forwardRef } from 'react';

import * as T from './types';
import * as S from './units';

export const Button = forwardRef<HTMLButtonElement, T.IButton>((props, ref) => {
    return (
        <S.Button size={props.size || 'normal'} {...props} ref={ref}>
            {props.children}
        </S.Button>
    );
});
