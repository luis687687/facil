import { Box, CardMedia, Stack } from '@mui/material'
import React from 'react'
import HomeForm from '../Box/BoxHomeForm'
import sizes, { design } from '../../settings/sizes'
import imgPerson from "../../assets/icon/Frame.svg"
require("./index.css")

export default function index({children}) {
  return (
        <Stack 
        className='back'
        sx = {{
            margin: 0,
           
            height: "95vh",
            
            flexDirection: "row",
            pt: "5vh",
            pl: sizes.paddingCard,
            
        }} 
        >
            <HomeForm style={{}} />
            <img src={imgPerson} style = {{
              marginLeft: "208px",
              scale: "1.05",
              
            }}/>
            
        </Stack>
  )
}
