import React from "react";
import {Loader} from "../loader/loader";

export const ProductsLoading: React.FC = () => {
    return (
        <div className="container flex flex-col justify-center items-center">
            <Loader height="20" width="20"/>
            <h3 className="mt-5 text-lg">Loading ...</h3>
        </div>
    );
};
