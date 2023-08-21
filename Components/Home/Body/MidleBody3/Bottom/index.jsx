import { Box, CardMedia, Stack } from '@mui/material'
import React from 'react'
import { BoxDescript } from '../../../../Box'
import colors from '../../../../../settings/colors'
import Vertical from './Vertical'

export default function index() {
  return (
    <Stack
      sx = {{
        m: 0,
        flexDirection: "row",
        justifyContent: "center",
       
        
      }}
    >
      <Stack
        sx = {{
          borderTop: "1px solid "+colors.borderForte,
          flexDirection: "row",
          pt: "125px",
          
          
          
        }}
      >
      <Stack
        sx ={{
          m: 0,
          mr: "143px"
        }}
      >
        <BoxDescript title = {`Todo processo de compra 
e aluguer feito a sua medida.`}
        body = {`Aluguel e compra de carros feitos sob medida para você! Nossa equipe especializada garante sua satisfação total. Escolha seu veículo perfeito em apenas 4 passos.`}
        titleStyle = {{
          color: colors.color1,
          fontSize: "30px",
          fontWeight: 400,
          fontFamily: "Inter"
          
        }}
        boxStyle = {{
          width: 570,
          
        }}
        bodyStyle={{
          

          /* Body - 18 */
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
        bodyWhite
        />
        <img
          sx = {{
            m:0,
            width: 542,
            height: 674.5,
            
          }}
          src={require("../../../../../assets/Home/ceo.png")}
        />
      </Stack>

      <Vertical />
      </Stack>
        
    </Stack>
  )
}
