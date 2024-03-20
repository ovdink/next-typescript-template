interface ICoomonTypes {
    isOpen: boolean;
    transition?: number;
    isClickable?: boolean;
    isHeightCalc?: boolean;
    isHorizontal?: boolean;
    isAutoHeight?: boolean;
    isAutoWidth?: boolean;

    menuId?: number;
    treeExpandArray?: number[];
}

export interface IExpand extends ICoomonTypes {
    setOpen?: (value: boolean) => void;
    seconds?: number;
    autoClose?: boolean;
    display?: 'flex' | 'block';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center';
    children?: React.ReactNode;
}

export interface IExpandWrapper extends ICoomonTypes {
    height: number;
    width: number;
    isHidden: boolean;
    isOpacityMode?: boolean;
    isAutoHeightClose?: boolean;
}
