import { CardMedia } from '@mui/material'
import React from 'react'
import logo1  from "../../assets/icon/logo.svg"
import logo2 from "../../assets/icon/logo2.svg"

export default function index(props) {

    const {white, style} = props
  return (
    <img
    style = {{
      backgroundSize: "contain",
      
      width: "146px",
      height: "13.324px",
      flexShrink: 0,
      m:0}}
    src = {
        white ? logo2 : logo1}
    />
  )
}
