import { Box, CardMedia, Stack, Typography} from '@mui/material'
import React from 'react'
import sizes from '../../../settings/sizes'

import colors from '../../../settings/colors'
import BoxMoreInfo from '../../Box/BoxMoreInfo'
import BoxDescript from "../../Box/BoxDescript"
import img from "../../../assets/Home/o-jovem-empresario-negro-e-atraente-compra-um-carro-novo-sonhos-realizados 1 (1).png"
export const MidleBody = () => {
  return (
    <Stack 
        sx = {{
            m: 0,
            width: "100%",
            mt: "109px",
           
            justifyContent: "center",
            
            alignItems: "normal"
           
        }}
        direction={"row"}
        alignItems={"center"}
        
    >
      
       <BoxDescript showCars 
       title = {"Garanta sua Jornada Perfeita: Compre os Melhores Carros Conosco!"}
       boxStyle ={{
        mr: "92px",
        

       }}
       body = "Se você está em busca do carro dos seus sonhos, não procure mais! Nossa concessionária oferece uma seleção excepcional dos melhores carros do mercado. Desde veículos luxuosos até modelos esportivos de última geração, temos o carro perfeito para atender a todas as suas necessidades e desejos. Conte com nossa equipe especializada para orientá-lo em cada etapa do processo de compra, garantindo que você saia com o veículo ideal para a sua vida e estilo. Não perca tempo, venha nos visitar e descubra como tornar cada viagem uma experiência inesquecível ao volante do seu novo carro!"/>
   
        <BoxMoreInfo img={img} text="Ver Carros para comprar"/>
    </Stack>
  )
}



