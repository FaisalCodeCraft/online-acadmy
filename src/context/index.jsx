import React, { createContext, useState } from 'react'
import "./theme.css"


export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("light")

    const ToggleMode = () => {
        setMode(mode == "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{ mode, setMode, ToggleMode }}>
            <div className={`theme ${mode}`}>

            {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;