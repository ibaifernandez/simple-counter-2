import React, { useState, useEffect } from "react";

import Context from "./Context.jsx";

const Provider = ({ children }) => {
    let units = 0;
    let tens = 0;
    let hundreds = 0;
    let thousands = 0;
    let tenThousands = 0;
    let hundredThousands = 0;

    const timer = () =>
        setInterval(() => {
            units++;

            if (units > 9) {
                units = 0;
                tens++;
            }
        }, 1000);

    return (
        <Context.Provider
            value={{
                hundredThousands: hundredThousands,
                tenThousands: tenThousands,
                thousands: thousands,
                hundreds: hundreds,
                tens: tens,
                units: units,
                timer: timer,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;
