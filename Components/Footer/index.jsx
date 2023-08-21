import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { ButtonForm, Logo } from '..'
import colors from '../../settings/colors'
import sizes from '../../settings/sizes'
import { Link } from 'react-router-dom'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TitleSubtitle from '../TitleSubtitle'
import fonts from '../../settings/fonts'
import { Input } from '../Form'
import imgLogo  from "../../assets/icon/logo2.svg"
import imgApple from "../../assets/icon/apple.svg"
import imgPlayStore from "../../assets/icon/playstore.svg"

export default props =>  {
    const {style, nomargin} = props
  return (
    <Stack
        className='footer'
        sx = {[{
            m: 0,
            width: "100%",
            bgcolor: colors.color2,
            
            
            mt: nomargin ? "-1vh" : "15vh",
            
            pt:"51px",
            pb: "29px",
            
            zIndex: 1,
            
            pl: "100px",
            pr: "109px",
            justifyContent: "space-between",
            color: colors.color1,
            
            
            
        }, style]}
    >
        <img src = {imgLogo} style = {{
           width: "146px"
        }} />
        <Stack sx = {{
            flexDirection: "row",
            justifyContent: "space-between",
            mt: "34.54px",
            pb: "53px",
            borderBottom: "1px solid "+colors.color1,
            flexWrap: "wrap",
            mb: "28px"
        }}>

            <Stack sx = {{
                maxWidth: "450px",
                mb: "33px"
            }}>
                <Typography sx = {{
                    textAlign: "left",
                    mb: " 33px"
                }}>
                    Transforme sua relação com o dinheiro e alcance uma vida financeira saudável. Com a Woney, você terá acesso a uma educação financeira de qualidade e ferramentas poderosas para controle das finanças. Baixe o nosso app agora mesmo!
                </Typography>

                <Stack sx = {{
                    flexDirection: 'row'
                }}>
                    <div style = {{
                        marginRight: "18px"
                    }}>
                        <ButtonStore image = {imgApple} />
                    </div>
                    <ButtonStore image = {imgPlayStore} />
                </Stack>
            </Stack>

            <ColumnInfo
                title = "Termos e privacidade"
                caminhos = {[
                    {
                        text: "Normas da comunidade"
                    },
                    {
                        text: "Termos de condições"
                    },
                    {
                        text: "Políticas de privacidade"
                    },
                    {
                        text: "Políticas de cookies"
                    },
                ]}
                />

            <ColumnInfo
                title = "Ajuda e suporte"
                caminhos = {[
                    {
                        text: "Dúvidas"
                    },
                    {
                        text: "Suportr"
                    },
                   
                ]}
                />

        <ColumnInfo
                title = "Quem somos"
                caminhos = {[
                    {
                        text: "A Facilauto"
                    },
                    {
                        text: "Para empresas"
                    },
                    {
                        text: "Blog"
                    }
                ]}
                />
        </Stack>
        <Typography sx = {{
            fontFamily: fonts.regular+" !important"
        }}>
            © 2023 Sup Innovation. Todos os direitos reservados.
        </Typography>
            
        
    </Stack>
  )
}


const ButtonStore = props => {

    const {image, onClick} = props
    return(
        <img src={image} style = {{
            width: "120px",
            height: "40px"
        }} />
    )
}

const ColumnInfo = props => {

    const {title, caminhos = []} = props
    return(
        <Stack sx = {{
            height: "100%",

        }}>
            <Typography sx = {{
                fontFamily: fonts.bold+" !important"
            }}>
                {title}
            </Typography>
            
            {
                caminhos.map( (v, k) => 
                <Stack sx = {{
                    mt: "17px"
                }}> 
                    <Link >
                        <Typography sx = {{
                            color: colors.color1,
                            fontFamily: fonts.regular+" !important",
                            fontSize: "16px"
                        }}>
                            {v.text}
                        </Typography>
                    </Link>
                </Stack>
                )
            }

        </Stack>
    )
}
const TextLink = e=> {
    const {children, to} = e

    return(
        <Link to = {to}>
            <Text style={{
                m:0
            }}>
                {children}
            </Text>
        </Link>
    )
}
const Text = e => {
    const {children, style} = e
    return(
        <Typography
            sx={[{
                color: "white",
                fontFamily:"Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                mr: 5,
                mb: 10
            }, style]}
        >
            {children}
        </Typography>
    )
}

const TextIcon = e => {

    const {icon, text} = e
    
    return(

        <Stack
            sx={{
                m:0,
                flexDirection: "row",
                
            }}
        >
            <CardMedia
                sx={{
                    m:0,
                    width: 25,
                    height: 25,
                    backgroundSize: "contain",
                    mr: 1
                    
                }}
                image={require("../../assets/icon/space.png")}
                />
                <Text>
                    Edifício Maianga - Apt 32
                </Text>

        </Stack>
    )
}
