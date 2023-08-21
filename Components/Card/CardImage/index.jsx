import { Box, Card, CardMedia, Stack } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import BoxDescript from '../../Box/BoxDescript'
require("./index.css")

export default (props) => {

    const {img, style} = props
  return (
    <Stack
        sx = {[{
            m: 0,
            width: "400px",
            height: "550px",
          
           
        }, style]}
    >
        <CardMedia
            sx = {{
                width: "100%",
                height: "100%",
               
            }} 
            image = {img}
        >
        <div 
        
        style = {{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(transparent,"+colors.color2+"aa)",
            zIndex: 10,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingRight: 10
            
        }}>
            <BoxDescript titleStyle = {{
                color: colors.color1,
                fontSize: 26,
                

             }} 
            boxStyle = {{
                padding: 0,
                 pl: 5, pb: 10,
                width: "100%",
              
        }} 
            bodyStyle = {{
                color: "rgba(255, 255, 255, 0.69)",
                fontSize: 17
            }}
            title = {"Pintura de Carro"}
            body = {"Deixamos o teu carro com o melhor visual."}
        ></BoxDescript>

        </div>
        </CardMedia>

    </Stack>
  )
}
