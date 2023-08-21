import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import sizes from '../../../settings/sizes'


export default function index(props) {

    const {title, body, number, icon, border, image} = props
   
  return (
   <Stack
    sx = {{
        width: 493,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        background: "transparent",
        textAlign: "left",
        m:0,
        borderBottom: border && "1px solid "+colors.borderFraco,
        pb: border && "53px",
        mb: border && "44.3px",
        alignItems: "start"
    }}
   >
    {(number) && <Typography
        sx = {{
            color: colors.cardLeavelNumber,
            fontFamily: "Telex",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            mr: "17px",
            mt: "-8px"
        }}
    >
        {number}
    </Typography>}
    
    <Stack
        sx = {{
            m:0
        }}
    >
    <Stack
        sx = {{
            m: 0,
            flexDirection: "row",
            alignItems: "center",
            mb: "15px"
        }}
    >
        {
            image && 
            <CardMedia
                sx={{
                    backgroundSize: "contain",
                    width: sizes.icon,
                    height: sizes.icon,
                    m: 0,
                    
                    mr: "21px"
                }}
                    image = {image}
                />
        }

        {icon &&
            
            icon
        }

        {title && <Typography
            sx = {{
                
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                color: "white",
            }}
        >
            {title}
        </Typography>}
        </Stack>
        {
            body &&
            <Typography
            sx = {{
                color: "rgba(255, 255, 255, 0.53)",

                /* Body - 18 */
                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            }}
        >
            {body}
        </Typography>}
    </Stack>
   </Stack>
  )
}
