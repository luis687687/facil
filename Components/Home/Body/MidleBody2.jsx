import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../settings/colors'
import sizes from '../../../settings/sizes'
import BoxDescript from '../../Box/BoxDescript'
import { Link } from 'react-router-dom'

const MEDIA_HEIGHT = 437
export const MidleBody2 = () => {

  return (
    <Stack
        direction={"row"}
        sx = {{
           
           
            background: "#000",
            margin: 0,
            mt: 20,
            p: 6,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
           
        }}
    >
        <CardMedia
            sx = {{
                width: 616,
                height: MEDIA_HEIGHT,
                background: colors.color1,
                margin: 0
            }}
            image={require("../../../assets/Home/o-jovem-empresario-negro-e-atraente-compra-um-carro-novo-sonhos-realizados 2.png")}
        />
        <Stack
            sx = {{
                m: 0,
            
                height: MEDIA_HEIGHT
            }}
        >
        <BoxDescript titleStyle = {{color: colors.color1, }} 
        boxStyle = {{pr: 0, pl: 5, width: 520}} 
        bodyStyle = {{color: colors.color1}}
            title = {"Problemas no Carro? Agende Conosco e Garanta uma Solução de Excelência!"}
            body = {"Nada é mais frustrante do que lidar com problemas no seu carro, mas estamos aqui para ajudar! Nossa oficina especializada conta com uma equipe altamente capacitada e equipamentos de ponta para diagnosticar e resolver qualquer inconveniente mecânico ou elétrico que seu veículo possa estar enfrentando. Agende um horário conosco e tenha a certeza de que seu carro será tratado com o máximo de cuidado e atenção. Sua segurança e satisfação são nossa prioridade, e faremos tudo ao nosso alcance para deixá-lo novamente na estrada com total tranquilidade. Conte com a gente para deixar seu carro em perfeitas condições novamente!"}
        >
           <Link>
                <Typography
                    sx = {{
                        mt: 5,
                        color: colors.color1,
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "161.023%", /* 25.764px */
                    }}
                >
                    Ver serviços :)
                </Typography>
           </Link>
            </BoxDescript>
        </Stack>

      

    </Stack>
  )
}
