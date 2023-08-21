import React from 'react'
import TitleShort from "../TitleShort"
import { Stack } from '@mui/material'
import { Input } from '../Form'


const BOX_WIDTH = 276
export default function index() {

    
  return (
    <Stack
        sx = {{
            m: 0,
            flexDirection: "colum",
        }}
    >
        <Stack
            sx = {{
                m:0,
                flexDirection: "colum",
                minWidth:BOX_WIDTH
            }}
        >
            <TitleShort text = {"Filtrar Pesquisa"} />
        
            
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />
            <LocalInput label = "Preço" selector />

            
        </Stack>
        
        <Stack sx = {{
            m:0,
            width: BOX_WIDTH,
            backgroundColor: "red"
        }} />

        

    </Stack>
  )
}

const LocalInput = e => {

    const {label} = e
    return(
        <Input label = {label} selector style = {{
            mb: "6px"
        }}/>
    )
}
