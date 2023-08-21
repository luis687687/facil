import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'
import imgBank from "../../assets/icon/bank.svg"
import fonts from '../../settings/fonts'
import sizes from '../../settings/sizes'
import { TouchApp } from '@mui/icons-material'
import { useState } from 'react'
import Button from '../Button'

export default props => {

    const {image, title, body, sugestion, referencia, valor, actived, setActived, opcao} = props

    const [porCima, setPorCima] = useState(false)
    const [clicked, setClicked] = useState(false)

    const enableBox = "#292D3266"
    const enableBanck = "#A9ABAD"

    const seleccionado = (actived == opcao)

    const isActive = clicked || porCima || seleccionado


  return (
    <div onMouseOver={ e=> setPorCima(true)} onMouseLeave={ e=> {setPorCima(false)}} onClick={ e => setActived(opcao)}>

    <Stack
        sx = {{
            pt: "26px",
            pl: "21px",
            border: "1px solid "+ (isActive ? colors.color2 : enableBox ),
            borderRadius: "4px",
            cursor: "pointer",
            mb: "11px",
            background: seleccionado && colors.color2+"04"
            
        }}>
        <Stack sx = {{
            flexDirection: "row",
            mb:"23px",
            alignItems: "center"
        }}>
            {
                !image ? 
                <Stack 
                sx = {{
                    width: "33.601px",
                    height: "32px",
                    borderRadius: "4px",
                    border: "1px solid "+(isActive ? colors.color2 : enableBanck),
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    mr: "9.45px",
                }}>
            
                     <img src = {imgBank} style = {{
                        width: "17.851px",
                        height: "17px",}}/>
            </Stack>
            :
            <img style = {{
                width: "33.601px",
                height: "32px",
                borderRadius: "4px",
               
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: "9.45px",

            }} src = {image} />
            }
            <Typography sx = {{
                fontFamily: fonts.regular,
                fontSize: "14px",
                color: isActive ? colors.color2 : enableBanck,
                
            }}>
                {title}
            </Typography>

        </Stack>

        <Stack sx={{mb: "17px"}}>
            <Typography sx = {{
                fontFamily: fonts.regular,
                fontSize: "14px",
                color: enableBanck,
                flexDirection: "column",
                display: "flex"
            }}>
               {body}
               <Stack sx = {{mb: "13px"}}/>{sugestion}
            </Typography>
        </Stack>



        {
            
            (referencia || valor) && <Stack sx = {{
            mb: "20px",
            width: "262.511px",
            background: "#D9D9D9",
            borderRadius: sizes.borderComum,
            pl: "15.75px",
            pt: "15px",
            pb: "15px"
        }}>
            
            <Typography sx = {{
                fontFamily: fonts.regular,
                fontSize: "14px",
                color: enableBanck,
                flexDirection: "column",
                display: "flex"
            }}>
               REFERÊNCIA: {referencia}
               <Stack sx = {{mb: "1px"}}/>
               PAGAMENTO: {valor}
            </Typography>

        </Stack>}
    </Stack>
    
    </div>
  )
}
