import { Stack } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'
import imageFrame from "../../assets/icon/Frame.svg"
import { CardLogin } from '../../Components/Card'
import { Footer } from '../../Components'
import sizes from '../../settings/sizes'

export default props => {
  return (
    <Stack sx = {{
       
    }}>
        <Stack sx = {{
            
            width: "100%",
            height: "30vh",
            background: colors.color2,

        }}/>
        <Stack sx = {{
            flexDirection: "row",
            alignItems: "flex-end",
            pl: sizes.paddingCard,
            mt: "-13vh"
            
            
        }}>
            <img src = {imageFrame} style = {{
                width: "618.4px",
                height: "727px",
                position: "relative",
                
                
                
            }}/>
            <Stack sx = {{
                top: "20vh",
                right: "160px",
                position: "absolute"
            }}>
                <CardLogin />
            </Stack>
        </Stack>
        <Footer style = {{}} nomargin/>
        
    </Stack>
  )
}
