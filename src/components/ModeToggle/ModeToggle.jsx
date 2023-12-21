import React, { useContext, useState } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { ThemeContext } from 'context'
import { ListItem } from '@mui/material'

const ModeToggle = () => {
    const{mode,ToggleMode} = useContext(ThemeContext)
  
  return (
    <div   onClick={ToggleMode}>
        
        <ListItem sx={{cursor:"pointer"}}>
          {mode=="light" ? <DarkMode/>:<LightMode/>}
        </ListItem>
    </div>
  )
}

export default ModeToggle;