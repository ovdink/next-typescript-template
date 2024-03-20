import styled, { keyframes } from 'styled-components';

export const dropdownShowAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const dropdownHideAnimation = keyframes`
    0% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
`;

export const PageWrapper = styled.main`
    position: relative;

    display: flex;
    flex-direction: column;
`;

export const ColumnWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    marginTop?: number;
    isCenter?: boolean;
}>`
    display: flex;
    flex-direction: column;
    align-items: ${({ isCenter }) => isCenter && 'center'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const FlexAlignCenterWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    marginTop?: number;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const FlexBetweenWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    justify-content: space-between;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;
