import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import { Link } from 'react-router-dom'

export default function index(props) {

    const {path} = props
  return (
    <CardMedia
    sx = {{
        m: 0,
        width: "196px",
        height: "181px",
        backgroundSize: "contain",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "start",
        mr: "130px",
        pl: "18px",
        pb: "23px"

    }}
    image = {require("../../../assets/Home/rectangle.png")}
    
    >
    <Link to = {path}>
        <Typography
            className = "normal-text"
            sx={{
                fontSize: "18px !important",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "161.023%",
                color: colors.color2,
                width: 111,
                textAlign: "left"
            }}
        >
            Abra a sua Conta agora
        </Typography>
        </Link>

</CardMedia>
  )
}
