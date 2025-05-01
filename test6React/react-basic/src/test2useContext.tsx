import React from 'react';
import {createContext, JSX, useContext, useState} from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");
const darkTheme = {
  backgroundColor: 'black',
  color: 'white',
};
const lightTheme = {
  backgroundColor: 'white',
  color: 'black',
};


export default function MyApp() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <MyComponent/>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换模式</Button>
      </ThemeContext.Provider>
      <hr/>
      <ThemeContext.Provider value={'dark'}>
        <MyComponent/>
      </ThemeContext.Provider>
    </>
  )
}

function MyComponent(): JSX.Element {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <p style={theme === 'dark' ? darkTheme : lightTheme}>当前主题：{theme}</p>
    </div>
  )
}

function Button({onClick, children}) {
  const theme = useContext(ThemeContext)
  return <button style={theme === 'dark' ? darkTheme : lightTheme} onClick={onClick}>{children}</button>
}