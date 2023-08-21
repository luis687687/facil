
import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

import back from "../../assets/Comprar/backcompra.svg"

import { BackImageGradient, CarsArea, Filter, FilterSearch } from '../../Components'
import sizes from '../../settings/sizes'
import colors from '../../settings/colors'
import { useContext } from 'react'
import { meuContexto } from '../../Context'
import fonts from '../../settings/fonts'



export default props => {

  const {setGlobalScreen} = useContext(meuContexto)

  const onClick = e => {
    document.getElementById("link_reservar").click()
    setGlobalScreen(window.location.pathname.split("/")[1])
  }
  
  return (
    <Stack
        sx={{
            m:0,
            //background: "red"
           
        }}
    >
        
        <CardMedia sx = {{
          
          height: "70vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: "85px",
          pl: sizes.paddingCard,
          color: "#fff",
          fontSize: "14px"
          
        }} image = {back}>
          <Typography sx = {{
            fontSize: "40px",
            fontFamily: fonts.bold+" !important",
            
            maxWidth: '546px'
          }}>
          Os melhores corros em um  só lugar
          </Typography>
          <Typography>
            Bem barato, Todo mundo quer
          </Typography>

        </CardMedia>
       
       <Stack sx = {{
        position: "relative",
        mt: "-20vh",
        background: colors.color1
        
       }}>
       <Filter style = {{
        mt: "-60px",
        mb: "29px"
       }} />

        <Stack
          sx ={{
              
              pr: sizes.paddingCard,
              pl: sizes.paddingCard,
             
              
              width: "100%",
              
              flexDirection: "row",
              background: colors.color1,
              
          }}
      >
        <FilterSearch />
        <CarsArea title = {"Nossa Recomendação"} buttonText = {"Reservar Compra"} onClick = { e => onClick()} />

      </Stack>
      </Stack>

        

    </Stack>
  )
}

