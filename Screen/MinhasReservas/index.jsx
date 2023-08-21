import React, { useEffect } from 'react'
import { useContext } from 'react'
import { meuContexto } from '../../Context'
import { IconButton, Stack, Typography } from '@mui/material'
import imgNota from "../../assets/icon/nota.svg"
import imgUpload from "../../assets/icon/upload.svg"
import imgVerify from "../../assets/icon/verify.svg"
import imgClose from "../../assets/icon/close.svg"
import { BackButton, StepList, TitleShort } from '../../Components'
import colors from '../../settings/colors'
import { ArrowDownward } from '@mui/icons-material'
import sizes from '../../settings/sizes'
import imgDown from "../../assets/icon/down.svg"
import { CardCarReserva } from '../../Components/Card'
import image from "../../assets/icon/car.svg"
import { description } from '../../Api'


export default props => {

  const {setEstiloAlterado} = useContext(meuContexto)
  useEffect(
    e => {
      setEstiloAlterado(true)
    }, []
  )

  const lista_steps = [{
    
    step: "Todas Reservas",
    icon: imgNota,
    value: 1,
    normal: true
    
},{
    
    step: "Pendentes",
    icon: imgUpload,
    value: 2,
    normal: true
},{
    
    step: "Completas",
    icon: imgVerify,
    value: 3,
    normal: true
},{
    
    step: "Canceladas",
    icon: imgClose,
    value: 4,
    normal: true
},
]

  const {stepHistoricoReserva,
    
    moveStepHistoricoReserva} = useContext(meuContexto)
  return (
    <Stack
      sx = {{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Stack sx = {{
        mb: "50px"
      }}>
        <Stack sx = {{
          mt: "72px",
          borderBottom: "1px solid #18984030",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: "20px"
        }}>
          <Stack>
            <TitleShort text = "Minhas Reservas" style = {{mb: "10px"}}/>
            <BackButton defaultBack/>
          </Stack>
          
        </Stack>
        
        <StepList style = {{
          mb: "75px"
        }}
        steps = {lista_steps} semtraco stepValor = {stepHistoricoReserva} mudaStep = {moveStepHistoricoReserva} border button individual/>
        
        <CardCarReserva image = {image} description = {description} buttonText = "Ver Detalhes" />

      </Stack>

      
    </Stack>
  )
}


