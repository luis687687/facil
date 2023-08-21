import React, { useContext } from 'react'
import colors from '../../../settings/colors'
import { Stack, Typography } from '@mui/material'
import { Input } from '../../Form'
import ButtonForm from '../../Form/ButtonForm'
import Linha from '../../Linha'
import fonts from '../../../settings/fonts'
import Button from '../../Button'
import imageFaceBook from "../../../assets/icon/facebook.png"
import imageGoogle from "../../../assets/icon/google.png"
import { Link } from 'react-router-dom'
import { meuContexto } from '../../../Context'
import {user} from "../../../Api"


export default props =>{

    const {setGlobalUserLogado, global_userLogado} = useContext(meuContexto)
    
    const clickLogin = e => {
        setGlobalUserLogado(user)
    }
  return (
    <Stack sx = {{
        
    }}>
        <Stack sx = {{
            width: "480px",
            background: colors.color1,
            borderRadius: "16px",
            zIndex: "3",
            p: "52px",
            pb: "60px"
        }}>
            <Stack sx = {{
                mb: "38px"
            }}>
                <TitleLocal text="Entre na conta e comece a negociar" />
            </Stack>
            
            <Input />
            <Stack sx = {{mb:"20px"}}/>
            <Input />
            <Stack sx = {{mb:"20px"}}/>
            {/* <Input />
            <Stack sx = {{mb:"20px"}}/>
            <Input />
            <Stack sx = {{mb:"20px"}}/>
            <Input />
            <Stack sx = {{mb:"20px"}}/> */}

            <Stack sx = {{
                color: "#bcbcbc",
                fontFamily: fonts.regular,
                mb: "36px"
            }}>Esqueci minha senha </Stack>

            <ButtonForm text = "Entrar" style = {{width: "100%" }} onClick = {clickLogin} />
            <Stack sx = {{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#bcbcbc",
                mb: "25px",
                mt: "25px"
            }}>
                <Linha />
                ou
                <Linha />
            </Stack>
            <Stack>
                <TitleLocal text = "Entre com suas redes sociais" />
            </Stack>
            <Stack sx = {{
                mt: "15px",
                mb: "16px"
            }}>
            <SocialButton text = "Entrar com Facebook" color="#157dc3" image = {imageFaceBook} textColor="#fff"
                onClick={clickLogin}
            />
            </Stack>
            <Stack>
            <SocialButton 
            onClick={clickLogin}
            text = "Entrar com Google" image = {imageGoogle} textColor ={colors.cardCarTitle} border = "rgba(0,0,0,0.2)"/>
            </Stack>
            <TextoEmLinha esquerda={"Não tem uma conta?"} direita="Crie a sua" />
        </Stack>
        <TextoEmLinha esquerda={"Precisa de ajuda?"} direita="Fale com a gente" />
        
    </Stack>
  )
}


const TitleLocal = e => {

    const {text} = e

    return(
        <Typography sx = {{
            fontSize: "20px",

            color: colors.cardCarTitle,
            fontFamily: fonts.semibold,

            
        }}>
            {text}
        </Typography>
    )
}

const SocialButton = props => {

    const {text, color, image, textColor, border, onClick} = props

    return(
        <Button text = {text} style= {{
            width: "100%",
            background: color,
            color: textColor,
            borderColor: border ? border : color,
            "&:hover" : {
                color: color
            }
        }} icon = {image} onClick={onClick}/>

    )
}

const TextoEmLinha = props => {

    const {esquerda, direita} = props
    return(
        <Stack sx = {{
            fontSize: "15px",
            color: colors.cardCarTitle,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mt: "32px"
        }}>
            {esquerda} <Stack sx = {{
                color: colors.color2,
                ml: "5px",
            }}>{direita}</Stack>
        </Stack>
    )
}