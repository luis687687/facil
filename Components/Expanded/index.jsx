import { Card, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'
import iconArrowDown from "../../assets/icon/arowdown.svg"
import sizes from '../../settings/sizes'

export default function index(props) {

    const {title, body, style} = props

  return (
    <Stack
        sx = {[{
            m: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            
            p: "27px",

            mb: "14px",
            background: colors.expandedCard,
            borderRadius:"4px",
            pt: "25px",
            pb: "26px",
            color: colors.cardCarTitle
        }, style]}
    >
    
    <Stack sx = {{
      
    }}>
        <Typography
            sx = {style}
        >
            {title}
        </Typography>
        {
            body && <Typography
            sx = {[style,
                {
                    fontWeight: 400,
                    color: colors.expandedBody
                }
            ]}
            >
                {body}
            </Typography>
        }
    </Stack>
<IconButton>
    <img src = {iconArrowDown} style = {{
        width: sizes.icon,
        height: sizes.icon,
        rotate: "-90deg"
    }} />
    </IconButton>

    </Stack>
  )
}


const style = {
    color: colors.expandedTitle,
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    m:0
}