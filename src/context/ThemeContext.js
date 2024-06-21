import React from "react";

const ThemeContext = React.createContext({
    isDarkMode: false,
    changeDarkMode: () => {}
})


export default ThemeContext