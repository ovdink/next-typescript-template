import styled, { css } from 'styled-components';

import * as T from './types';

import { theme } from '@/styles';

const ButtonBase = styled.button<T.IButton>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ size }) =>
        size === 'small'
            ? css`
                  height: 45px;

                  font-size: 16px;
                  font-weight: 500;
                  line-height: 24px;
              `
            : css`
                  height: 50px;

                  font-size: 16px;
                  font-weight: 700;
                  line-height: 28px;
              `}

    white-space: nowrap;

    width: 100%;
    padding: 0 16px;

    border: none;
    border-radius: ${theme.borderRadiusSecondary};

    transition: all 0.2s ease-in-out;

    user-select: none;

    &:not(:disabled) {
        cursor: pointer;
    }

    &:disabled {
        /* TODO: color? */
        cursor: not-allowed;
    }
`;

const primaryButtonStyle = css`
    background-color: ${theme.colors.gray900};

    color: ${theme.colors.baseWhite};

    &:disabled {
        background-color: #bcbcbc;
    }

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.gray600};
        }
    }
`;

const outlineButtonStyle = css`
    color: #18181b;

    border: 1.5px solid;

    border-color: ${theme.colors.gray400};

    transition: border-color 0.2s ease-in-out;

    @media (hover: hover) {
        &:not(:disabled):hover {
            border-color: ${theme.colors.gray600};
        }
    }
`;

export const Button = styled(ButtonBase)<T.IButton>`
    ${({ stylescheme = 'primary' }) =>
        stylescheme === 'outline' ? outlineButtonStyle : primaryButtonStyle}
`;
