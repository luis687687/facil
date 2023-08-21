import { CardMedia, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'
import { Button } from '../..'
import { ArrowBack, ArrowForward, ArrowRight, ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import CardCarNota from '../CardCarNota'

export default  (props) => {

    
    const {description, image, click, buttonText} = props
    const {marca, modelo, lugares, combustivel, kilometro, preco,} = description

  return (
    <Stack
        sx = {{
            flexDirection: "column",
            width: "291px",
            height: "554px",
            background: colors.color1,
            border: "1px solid "+colors.borderCardCar,
            borderRadius: "0px 0px 10px 10px ",
            mb: "49.57px",

        }}
    >
        
        <CardMedia 
            sx = {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                pr: "14.14px",
                width: "288.82px",
                height:"251px",
                background: colors.color2,
                backgroundSize: "contain"
            }}
            image={image}
        />
        <CardCarNota description={description} click = {click} buttonText = {buttonText} />
    </Stack>
  )
}

const Descript = e => {

    const {text} = e 
    return(
        <Stack
            sx = {{
                width: "100%",
                overflow: "hidden",
                
            }}
        >
        <Typography sx = {{
            fontFamily: fonts.comum2,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            fontHeight: "normal",
            mb: "1px",
            width: "100%",
            color: "rgba(42, 45, 53, 0.72)"

        }}


        
        >
            {text}
            
            </Typography>
        </Stack>
    )
}


