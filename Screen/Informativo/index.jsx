import { Stack, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import back_politicas from "../../assets/Informativo/back_politicas.svg"
import back_servicos from "../../assets/Informativo/back_servicos.svg"
import back_sobre from "../../assets/Informativo/back_sobre.svg"
import fonts from '../../settings/fonts'
import Politicas from './Politicas'
import { Footer } from '../../Components'
import { meuContexto } from '../../Context'
import Servicos from './Servicos'
import Sobre from './Sobre'

export default props => {

  
  
  
  

  
  const local = document.location.pathname.split("/")[1]

  const is_service = local == "servicos"
  const is_policy = local == "politicas"
  const is_about = local == "sobre"

  const alturaTop = 
    is_policy ? 
      "369px" :  "519px" 

  const backgroundTransparent = 
    is_policy ? 
      "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #C8C8C8 100%)" 
        : ""

  
  return (
    <Stack sx = {{
      fontFamily: fonts.medium,
      width: "100%"
    }}>
        <img style = {{
            height: alturaTop,
            width: "100%",
            margin: 0,
            objectFit: "cover" 
        }} src = {
          is_service ? back_servicos : is_policy ? back_politicas : back_sobre
        }/>

        <Stack sx = {{
          position: "absolute",
          height: alturaTop,
          width: "100%",
          backgroundImage: backgroundTransparent,
          justifyContent: "center",
          alignItems: "center",
          pl: "274px",
          pr:"280px",
          background: is_about && "rgba(0,0,0,0.24)"
        }}>
          <Typography sx = {{
            color: "#fff",
            fontSize: "41px",
            fontFamily: fonts.bold+" !important",
            textAlign: "center"
            
          }}>
            {is_policy && "Nossas Políticas"}
            {is_service && "Nossos seriços"}
            {is_about && "Nascemos com a missão de deixar a vida mais fácil. Pra todo mundo"}
          </Typography>

            <Stack sx = {{

            }}>
            <Typography sx = {{
              color: "#fff",
              fontSize: "21px",
              textAlign: "center"
            }}>
              {( is_service || is_about )&& "Não fazemos isso só pelo dinheiro. Mas por acreditarmos que podemos transformar o mundo das pessoas pra melhor."}
              
              
            </Typography>
            </Stack>
          
        </Stack>
        <Stack sx = {{
          pl: is_about? 0 : "150px",
          pr: is_about? 0 : "162px",
          mb: "10vh",
          width: '100%'
        }}>
          {is_policy && <Politicas />}
          {is_service && <Servicos />}
          {is_about && <Sobre />}
        </Stack>
        <Footer />
    </Stack>
  )
}

