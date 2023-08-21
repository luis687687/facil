import { Box, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'


export default (props) => {
    const {
        bodyWhite,
        titleStyle={}, bodyStyle={}, showCars, boxStyle, title, body, children} = props

        

        const bodyFixedColor = bodyWhite ? "#ffffff75" : null
    return(
        <Box 
        
    sx = {[{

        width: "645px",
        m: 0,
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
       
        
    }, boxStyle]}>
        <Stack 
        sx = {{
            flexDirection: "column",
            justifyContent: "flex-start",
            
        }}>
            
            <Typography sx = {[{
                    color: "#2A2D35",
                    fontFamily: "Epilogue",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginBottom: "22px",
                color: colors.color2
            }, titleStyle]}>
                
            { title}
            
            </Typography>

            <Typography className="midle_text_body" 
                    sx = {
                        [{  
                            fontFamily: 'Inter',
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            color: !bodyFixedColor ? "#666" : bodyFixedColor,
                            lineHeight: "161.023%", /* 22.543px */
                        },
                    bodyStyle]}
            >
            {body}
            </Typography>
       </Stack>
      {showCars && <CardMedia 
                image = {require("../../assets/Home/marks.png")}
                sx = {{
                    height: 150,
                    width: 379,
                    backgroundSize: "contain",
                    margin: 0,
                }}
            />}
            {children}
    </Box>
    )
}