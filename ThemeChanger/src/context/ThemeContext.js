import React from 'react';

const ThemeContext = React.createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export default ThemeContext;