import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import BackImage from "../../BackImage"
import HomeForm from '../../Box/BoxHomeForm'
import { MidleBody } from './MidleBody'
import { MidleBody2 } from './MidleBody2'
import TitleSubtitle from "../../TitleSubtitle"
import ScrollImagesCard from '../../Scroll/ScrollImagesCard'
import MidleBody3 from './MidleBody3'
import MidleBody4 from './MidleBody4'
import imgIconCar from "../../../assets/icon/iconcar.svg"
import imgIconHend from "../../../assets/icon/iconhend.svg"
import fonts from '../../../settings/fonts'
import colors from '../../../settings/colors'

export default r => {    
   return( 
        <Stack
            sx = {{
                m:0,
                width: "100%",
                
            }}
        >
            <BackImage />
            <Stack sx = {{
                width: "100%",
                alignItems: "center",
                mt: "-10vh"
            }}>
                <Stack sx = {{
                    width: "1233px",
                    flexDirection: "row",
                    borderRadius: "12px",
                    boxShadow: "0px 1px 4px 0px rgba(187, 187, 187, 0.25)",
                    p: "55px",
                    pt: "39px",
                    pb: "36px",
                    background: colors.color1,
                    justifyContent: "space-between",
                    zIndex: 5
                }}>
                    <CardCircleInformation image={imgIconCar} 
                    title = "Carros limpos. Reservas flexíveis feitas a medida do seu bolso." 
                    body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança que precisa no seu aluguer." />

                    <CardCircleInformation image={imgIconHend} 
                    title = "Inscreva-se para receber as nossas ofertas." 
                    body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança." />

                </Stack>

            </Stack>
            <MidleBody />
            <MidleBody2 />
            
            <ScrollImagesCard />
            <MidleBody3 />
            <MidleBody4 />
            
        </Stack>
    )
}

const CardCircleInformation = props => {

    const {image, title, body} = props

    return(
        <Stack sx = {{
            flexDirection: 'row',
            justifyContent: "space-between",
            
            
        }}>
            <Stack sx = {{
                borderRadius: 100,
                background: "rgba(24, 152, 64, 0.30)",
                width: "80px",
                height: "80px",
                alignItems: "center",
                justifyContent: "center",
                mr: "67px"
            }}>
                <img src = {image} sx = {{
                    width: "42px",
                    height: "42px"
                }}/>
                </Stack>

                <Stack sx = {{
                    width: "352px"
                }}>
                    <Typography sx = {{
                        //fontFamily: fonts.bold7
                        color: colors.cardCarTitle,
                        fontSize: "20px",
                        mb: "15px",
                        fontFamily: fonts.semibold+" !important"
                    }}>
                        {title}
                    </Typography>
                    <Typography sx = {{
                        color: "rgba(42, 45, 53, 0.61)",
                        fontSize: "14px"
                    }}>
                        {body}
                    </Typography>
                </Stack>
            
        </Stack>
    )
}