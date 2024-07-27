import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({children, value}) => {

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
