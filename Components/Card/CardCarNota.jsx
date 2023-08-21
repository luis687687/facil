import React from 'react'
import Button from '../Button'
import { Stack, Typography } from '@mui/material'
import colors from '../../settings/colors'
import fonts from '../../settings/fonts'
import { ArrowForward } from '@mui/icons-material'

export default props => {

    const {description, click, buttonText, style} = props
    const {marca, modelo, lugares, combustivel, kilometro, preco} = description

  return (
    <Stack sx = {[{
        pl: "29.12px",
        pr: "29.12px",
        flex: 1,
        pt: "14px"
    }, style]}>
        <Stack
            sx = {{
                width: "132.558px",
                height: "31px",
                alignItems: "center",
                justifyContent: "center",
                background: colors.nota,
                borderRadius: "2px"
            }}
        >
            <Typography
                sx = {{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: colors.valor,
                    
                }}
            >
                {preco} AO
            </Typography>
        </Stack>


        <Typography
                sx = {{
                    fontFamily: fonts.comum,
                    fontSize: "20px",
                    color: colors.cardCarTitle,
                    mt: "12px",
                    fontWeight: 600,
                    mb: "14px"
                }}
                
            >
                {marca}
            </Typography>
            
            <Descript text = {"Modelo: "+modelo} />
            <Descript text = {"Lugares: "+lugares+" lugares"} />
            <Descript text = {"Combustivel: "+combustivel} />
            <Descript text = {"Kilometragem: "+kilometro} />
            
       {buttonText && <Button 
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

        onClick = {e => click()}


        materialIcon = {
          <ArrowForward />
        }
        styleMaterial = {{
            m:0
        }}
        iconRight
        />}

    </Stack>

  )
}


const Descript = e => {

    const {text} = e 
    return(
        <Stack
            sx = {{
                width: "100%",
                overflow: "hidden",
                
            }}
        >
        <Typography sx = {{
            fontFamily: fonts.comum2,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            fontHeight: "normal",
            mb: "1px",
            width: "100%",
            color: "rgba(42, 45, 53, 0.72)"

        }}


        
        >
            {text}
            
            </Typography>
        </Stack>
    )
}


