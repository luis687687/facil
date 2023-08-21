import { Box, Card, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import sizes, { design } from '../../settings/sizes'
import { Checkbox, Input } from '../Form'
import colors from '../../settings/colors'

import image from "../../assets/icon/search.svg"
import { Button } from '..'
import fonts from '../../settings/fonts'
import imgAvatar from "../../assets/icon/user.svg"


export default ({style}) => {

  const [procura, setProcura] = useState()
  const [marca, setMarca] = useState("Seleccione a marca")
  const [modelo, setModelo] = useState("Seleccione o modelo")
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  
  return (
    <Stack
      sx = {{
        
        width: "450px",
      }}
    >
    <Box sx = {[{
        
        
        pb: "27px",
        bgColor: "#fff",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        background: colors.color1,

       
        pt:"33px",
        pl: "36px",
        pr: " 28px"
        
        
    }, style]}>
      <Typography
        sx={{
          color: "#000",
          fontFamily: fonts.bold,
          fontSize: "27px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          m: 0
        }}
      >
        Encontre as Melhores Soluções de Mobilidade

      </Typography>

      <Stack
        sx={{
          m:0,
          pt: 2,
          pb: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

        }}
      >
        <Checkbox 
          color={colors.color2}
          label = "Todos"
          
        />
          <Checkbox 
          color={colors.color2}
          label = "Novos"
        />
        <Checkbox 
          color={colors.color2}
          label = "Usados"
        />
        <Checkbox 
          color={colors.color2}
          label = "Leasing"
        />
       
      </Stack>
      

      <Input 
        label = "O que procuras ?"
        image = {image}
        onChange={setProcura}
        value={procura}
        style = {{
          mb: "16.79px"
        }}
      />

      <Stack
        sx = {{
          m:0,
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          grid: 2,
          mb: "10.72px"
        }}
      >
        
        <Input
        select = {["a","b"]}
        label = "Marca"
        selector
        style={{
          width: 190,
          height: 63,
          fontSize: 5,
          paddingButton: 0,
          paddingTop: 0
        }}
        onChange={setMarca}
        value={marca}
      />

  <Input 
        label = "Modelo"
        select
        style={{
          width: 190,
          height: 63,
          fontSize: 5,
          paddingButton: 0,
          paddingTop: 0
        }}

        onChange={setModelo}
        value={modelo}
      />

      </Stack>

      <Stack
        sx = {{
          m:0,
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          grid: 2,
          mb: "16.88px"
        }}
      >
        <Input 
                label = "Máximo"
                
                style={{
                  width: 190,
                  height: 63,
                  fontSize: 5,
                  paddingButton: 0,
                  paddingTop: 0
                }}

                onChange={setMax}
                value={max}
              />

            <Input 
                    label = "Mínimo"
                    
                    style={{
                      width: 190,
                      height: 63,
                      fontSize: 5,
                      paddingButton: 0,
                      paddingTop: 0
                    }}
                    onChange={setMin}
                    value={min}
                  />
      </Stack>
      <Button 
                    text="Pesquisar Veículo"
                    style= {{
                      width: "100%",
                      backgroundColor: colors.color2,
                      color: colors.color1,
                      "&:hover":{
                        color: colors.color2
                      }
                    }}

                    onClick = { e=>{}}
                 
                  />

    </Box>

    <Stack sx = {{
      flexDirection: "row",
      color: colors.color2,
      
      width: "100%",
      pt: "20px"
    }}>
        <img src = {imgAvatar} style = {{
          width: sizes.icon,
          height: sizes.icon,
          marginRight: "15px"
        }}/>
        <Typography sx = {{
          fontSize: "14px"
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo assumenda accusantium fugit
        </Typography>
    </Stack>
    </Stack>
  )
}
