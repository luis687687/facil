import { BackHand } from '@mui/icons-material'
import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { Button } from '..'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import colors from '../../settings/colors'

export default function BoxMoreInfo(props) {

  const {img, text} = props
  return (
    <CardMedia
        sx = {{
            width: "483px",
            height: "411px",
            backgroundSize: "cover",
            margin: 0,
            

        }}
        image = {img}
    >
      <Button 
    text={text} style= {{
        background: "transparent",
        backgroundImage: `linear-gradient(163deg, ${colors.color2}, ${colors.color2}ea, ${colors.color2}80)`,
        color: colors.color1,
        width: "447px",
        height: "67px",
        flexShrink: 0,
        justifyContent: "space-between",
        pl: "33px",
        pr: "25px",
        position: "relative",
        top: "90%",
        left: "50px"


      }}
      textStyle={{
        fontSize: "16px",
        fontWeight: "700"
      }}
        materialIcon = {<ArrowForwardSharpIcon />}
        iconRight   
      />
    </CardMedia>
  )
}
