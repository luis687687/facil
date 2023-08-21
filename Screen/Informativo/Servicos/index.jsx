import { Stack, Typography } from '@mui/material'
import React from 'react'
import fonts from '../../../settings/fonts'
import { CardImage } from '../../../Components/Card'
import pintando from "../../../assets/Home/pintando.png"
export default props => {
  return (
   <Stack sx = {{
    mt: "111px"
   }}>
    <Typography sx = {{
        fontSize: "30px",
        color: "#000",
        fontFamily: fonts.semibold+" !important",
        mb: "30px"
    }}>
        Nossos serviços
    </Typography>

    <Stack sx = {{
        flexDirection: "row",
        flexWrap: "wrap"
    }}>
                
                {
                    Array(7).fill().map(
                        (v,k) => <LocalCardImage image = {pintando} key={k}/>
                    )
                }
                
    </Stack>

   </Stack>
  )
}

const LocalCardImage = props => {

    const {image} = props

    return(
        <Stack sx = {{
            mb: "28px",
            ml: "5px"
        }}>
            <CardImage img = {image}/>
        </Stack>
    )
}
