import React, { useContext } from "react";
import Context from "../context/Context.jsx";

const Layout = () => {
    const { hundredThousands, tenThousands, thousands, hundreds, tens, units } =
        useContext(Context);

    return (
        <div className="d-flex justify-content-center fs-1">
            <div>{hundredThousands}</div>
            <div>{tenThousands}</div>
            <div>{thousands}</div>
            <div>{hundreds}</div>
            <div>{tens}</div>
            <div>{units}</div>
        </div>
    );
};

export default Layout;
