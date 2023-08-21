import { Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'
import { Done } from '@mui/icons-material'
import { useState } from 'react'

export default props => {

    const {text, active, setActive, valor, seguro, style} = props

    const borderDisabledColor = "#2A2D35B8"
    const textDisabledColor = "#2A2D35A6"

    const [por_cima, setPorCima] = useState(false)

    const activo = por_cima || active == valor

  return (
    <div onMouseOver={ e => setPorCima(true)} onMouseLeave={ e => setPorCima(false)} onClick={ e => setActive(valor)}>
        <Stack
            sx = {[{
                borderRadius: "4px",
                width: "304px",
                
                border: "1px solid "+(activo ? colors.color2 : borderDisabledColor),
                pl: "15px",
                flexDirection: "row",
                
                pt: "14px",
                pb: "4px",
                pr: "5px",
                cursor: "pointer"
                
                
            }, style]}

            
        >

            <Stack sx = {{
                mt: "-5px",
                mr: "11px",

            }}>
                <Done 
                    sx={{
                        color: activo ? colors.color2 : textDisabledColor,
                        width: "11px",
                        m: 0,
                        
                    }}
                />
            </Stack>
            <Typography
                sx = {{
                    color: activo ? colors.color2 : textDisabledColor,
                    fontSize: "14px",
                    fontFamily: fonts.medium,
                    mt: "-5px"
                    
                }}
            >
                {
                    seguro ? `Seguro Automóvel + \n
                    Cobertura contra Terceiros`
                    : text
                }

            </Typography>

        </Stack>
    </div>
    )
    
}
