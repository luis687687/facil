import { Stack } from '@mui/material'
import React from 'react'
import { CardCar } from '../Card'
import { TitleShort } from '..'
import colors from '../../settings/colors'
import { description } from '../../Api'
import imagem from "../../assets/Comprar/car.png"

import { useContext } from 'react'
import { meuContexto } from '../../Context'
import { Link } from 'react-router-dom'


export default props => {
    const {carros, title, style, buttonText, onClick} = props
    const {setGlobalScreen} = useContext(meuContexto)
    const cars = Array(30).fill().map(e=>2)
    
    const click = e => {
        
        onClick()
       
        
    }
    
    
    
  return (
    <Stack
        sx = {[{
            flex: 1,
            flexDirection: "column",
            pl: title ? "16.23px" : 0,
            
        }, style]}
    >
        

        <TitleShort 
            text = {title}
            style = {{
                color: colors.titleBlack,
                display: title ? "initial" : "none"
            }}
        />
        
        <Stack
            sx={{
                flex:1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}
        >
            
           { 
           
           cars.map(
           e => <CardCar 
                key = {Math.random()}
                description = {description}
                image = {imagem} 
                click = { e => click()}
                buttonText = {buttonText}
                />
                
           )
            }
        </Stack>
    </Stack>
  )
}
