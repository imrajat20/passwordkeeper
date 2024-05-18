import React from "react";

const PasswordContext = React.createContext({
    passwords: [],
    totalAmount: 0,
    addItem: (items) => {},
    removeItem: (id) => {}
});

export default PasswordContext;
