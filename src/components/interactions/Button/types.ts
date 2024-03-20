import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'normal' | 'small';
    stylescheme?: 'primary' | 'outline';
}
