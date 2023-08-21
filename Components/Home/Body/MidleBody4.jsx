import React from 'react'
import { BoxDescript } from '../../Box'
import { Stack, Typography } from '@mui/material'
import sizes from '../../../settings/sizes'
import { Expanded } from '../..'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'

export default function MidleBody4() {
  return (
    <Stack
        sx={{
            
            m: 0,
            
            mt: "92px",
            pl: "146px",
            pr: "117px"
            

        }}
    >
        <Typography sx = {{
            color: colors.color2,
            fontFamily: fonts.semibold+" !important",
            fontSize: "40px",
        }}>
            Alguma dúvida? Saiba mais aqui 
        </Typography>
        <Typography sx = {{
            fontSize: fonts.medium,
            color: colors.cardCarTitle,
            fontSize: "20px",
            mb: "24px"
        }}>
            Confira as nossas respostas.
        </Typography>
  
            <Expanded 
       
                title={"A Facilauto é confiável ?"}
                
            />
            <Expanded title={"A Facilauto é confiável ?"}/>
            <Expanded title={"A Facilauto é confiável ?"}/>
            <Expanded title={"A Facilauto é confiável ?"}/>

    </Stack>
  )
}
