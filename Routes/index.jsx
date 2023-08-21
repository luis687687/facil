import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { screens } from '../settings/screens'





export default  () => (
    
    <Routes>
        {
            screens.map(
                screen => {
                    if(screen.element)
                        return <Route key = {screen.path} path = {`/${screen.path}`} element = {screen.element} />
                    
                }
            )
        }
    </Routes>
)
