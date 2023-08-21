import { CardMedia, Stack } from '@mui/material'
import React from 'react'
import { BoxDescript } from '../../../../../Box'
import colors from '../../../../../../settings/colors'
import TopLeftRow from './TopLeftRow'

import iconKey from "../../../../../../assets/Home/sel1.png"
import iconTicky from "../../../../../../assets/Home/sel2.png"
import iconTicky2 from "../../../../../../assets/Home/sel3.png"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import sizes from '../../../../../../settings/sizes'

export default function TopLeft() {
  return (
    
        <Stack 
        sx = {{
            m: 0,
            pl: 0
        }}
    >
        <Stack
            direction = {"row"}
            sx = {{
                m: 0,
                pb: "74px"
            }}
        >
            <BoxDescript 
                title={"Especialistas em oferecer sempre o melhor atendimento!"}
                body={`Contamos com uma equipe dedicada, experiente e comprometida em oferecer o melhor atendimento possível, para que você se sinta tranquilo ao fazer negócios conosco.`}
                titleStyle={{
                    color: colors.color1,
                    /* Heading - 40 */
                    fontFamily: "Inter",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  
                }}
               
                bodyStyle = {{
                    fontSize: 18,
                    width: 635
                }}
                bodyWhite
            />
            <CardMedia 
                sx = {{
                    m: 0,
                    width: 173,
                    height: 155,
                    backgroundSize: "contain",
                    ml: "62px"
                }}
                image={require("../../../../../../assets/Home/circle.png")}
            />
        </Stack>
        <TopLeftRow image={iconKey} title = "Total Confiança" body = "Nossa prioridade é conquistar a total confiança de nossos clientes em cada etapa do processo. Desde o momento em que você nos procura até a conclusão de nossos serviços, estamos empenhados em transmitir segurança, transparência e integridade."/>
        <TopLeftRow image={iconTicky} title = "Garantimos Segurança" body = "A segurança é uma prioridade absoluta em nossa empresa, e nosso compromisso em garantir a proteção dos nossos clientes é inabalável. Desde o momento em que você entra em contato conosco até o final de cada transação, dedicamo-nos a proporcionar uma experiência livre de preocupações."/>
        <TopLeftRow 
        icon = {<VerifiedOutlinedIcon
            sx={{
                backgroundSize: "contain",
                width: sizes.icon,
                height: sizes.icon,
                m: 0,
                color: "white",
                mr: "21px"
            }}
               
            />}
        title = "Carros de Qualidade " body = "Cada veículo em nosso estoque passa por rigorosas verificações e inspeções para garantir o máximo desempenho, confiabilidade e segurança." noborder/>
    </Stack>
  )
}
