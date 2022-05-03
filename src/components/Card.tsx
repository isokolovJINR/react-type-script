import React, {FC, ReactElement, useState} from 'react';


export enum CardVariant {
    outLined= 'outlined',
    primary = 'primary'

}
interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    children?: ReactElement;
    onClick: (num: number) => void;
}
const Card: FC <CardProps> =
    ({

         width,
         height,
         variant,
         children,
         onClick
    }) => {

    const [state, setState] = useState(0);
    return (
        <div style={{width, height,
            border: variant === CardVariant.outLined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;