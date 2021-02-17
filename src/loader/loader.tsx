import React from "react";
import './loader.css'

interface Props {
    height: string,
    width: string
}
export const Loader: React.FC<Props> = ({height , width}) => {
    const classes= `loader ease-linear rounded-full border-8 border-t-8 border-gray-300 h-${height} w-${width}`;
    return <div className={classes} />;
};
