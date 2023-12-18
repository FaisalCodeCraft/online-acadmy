import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'


export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light")

    const ToggleMode = () => {
        setMode(mode == "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{ mode, setMode, ToggleMode }}>
            <Box sx={{ bgcolor: mode === "light" ? "rgb(255, 248, 236)" : "black", color: mode === "light" ? "black" : "white" }}>{children}</Box>

        </ThemeContext.Provider>
    )
}

export default ThemeProvider;