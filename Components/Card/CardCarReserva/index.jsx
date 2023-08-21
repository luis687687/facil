import { CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import CardCarNota from '../CardCarNota'
import imgMessage from "../../../assets/icon/message.svg"
import imgTrash from "../../../assets/icon/trash.svg"
import sizes from '../../../settings/sizes'
import Button from '../../Button'
import { ArrowForward } from '@mui/icons-material'
import { textoAdaptativo } from '../../../settings/style'

export default props => {

    const {description = {}, image, click, buttonText} = props
    const {marca, modelo, lugares, combustivel, kilometro, preco,} = description


  return (
    <Stack sx = {{
        borderRadius: "6px",
        border: "1px solid "+colors.borderCardCarHistorico,
        p: "22px",
        pl: "21px",
        pr: "51px",
        flexDirection: "row",
        justifyContent: "space-between"
        
    }}>
        <img style ={{
            width: "268PX",
            height: "251px",
            borderRadius: "8px"
        }} src = {image}/>
        <Stack sx = {{
          flex: 1,
          pl: "50px"
        }}>
          <Stack sx = {{
            flexDirection: "row",
            justifyContent: "space-between",
            color: colors.color2,
            mb: "24px"
          }}>
            <CardCarNota description={description} style = {{
              p: 0,
            }}/>
            <Stack>
              <Stack sx = {{
                flexDirection: "row",
                width: "220px",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "74px"
              }}>
                <Typography>Fale Connosoco</Typography>
                <ButtonIcon image = {imgMessage} />
                <ButtonIcon image = {imgTrash} />
                
              </Stack>
              <Button 
                text={buttonText}
                style = {{
                    mt: "21px",
                    width: "100%",
                    borderRadius: "5px",
                    height: "43px",
                    justifyContent: "space-between",
                    pl: "16.99px",
                    pr: "12px",
                    borderColor: colors.color2,
                    color: colors.color2
                }}

                onClick = {e => {}}


                materialIcon = {
                  <ArrowForward />
                }
                styleMaterial = {{
                    m:0
                }}
                iconRight
                />
            </Stack>
            
          </Stack>
          <Stack sx = {{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <StepsHistory text = {"Pedido Submetido"} just/>
            <StepsHistory text = {"Validar Pedido e Identidade"} actived/>
            <StepsHistory text = {"Pagamento"} />
            <StepsHistory text = {"Esperar Encomenda"} />
            <StepsHistory text = {"Compra Processada"}  no/>
          </Stack>
        </Stack>
        
    </Stack>
  )
}


const ButtonIcon = props => {

  const {image} = props

  return(
    <IconButton>
          <img src = {image} style = {{
                  width: sizes.icon,
                  height: sizes.icon
                }} />

    </IconButton>
  )
}


const StepsHistory = props => {

  const {text, actived, just, no} = props
  return(
    <Stack sx = {{
      width: "165px",

      
    }}>
      <Stack sx = {{
        flexDirection: "row",
        alignItems: "center",
        mb: "13px"
      }}>
        <div style = {{
          width: "14px",
          height: "14px",
          borderRadius: 100,
          background: actived ? colors.color2 : just ? colors.color1 : "#D9D9D9",
          mb: "13px",
          border: "1px solid "+(just ? colors.color2 : "transparent")

        }}></div>
        {no || <Stack sx = {{
          height: "1px",
          borderBottom: "1px dashed black",
          flex: 1

        }}/>}
      </Stack>
      <Typography sx = {{
        ...textoAdaptativo,
          fontSize: "12px",
          color: actived && colors.color2
          
      }}>
        {text}
      </Typography>
    </Stack>
  )
}