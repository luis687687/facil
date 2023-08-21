import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import colors from '../../settings/colors'
import { meuContexto } from '../../Context'
import fonts from '../../settings/fonts'

export default props => {
    const {onClick, text, textStyle = {}, style, icon, iconRight, materialIcon, styleMaterial, alterado} = props
    



    

  return (
 
        <Button 
        
        onClick={ e => onClick()}
        sx={[{
            fontFamily: fonts.medium,
            color: alterado ? colors.color1 : colors.color2,
            width: "150px",
            height: "46px",
            m:0,
            p:0,
            border: "1px solid "+(alterado ? colors.color1 : colors.color2),
            flexDirection: iconRight && "row-reverse",
            justifyContent: "flex-start",
            fonstSize: textStyle.fontSize ? textStyle.fontSize : "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            borderRadius: "2px",
            justifyContent: (!icon) ? "center" : "normal",
            
            
            
        
        }, style]}>
        {icon && <img src={icon} alt="" style={{
                    m:0,
                    width: "24px",
                    height: "24px",
                    marginRight: !iconRight ? "19px" : "23px",
                    marginLeft: iconRight ? "19px" : "23px",

                  }}/>}
        {
            
            materialIcon &&
            <Stack 
                sx = {[{
                    width: 25,
                    height: 25,
                    marginRight: !iconRight ? "23px" : "19px",
                    marginLeft: iconRight ? "23px" : "19px",
                    m:0
                }, styleMaterial]}>
                    {materialIcon}
                </Stack>
        }
        <Typography 
            sx={[{
                textTransform: "none",
                m:0,
                
                
            }, textStyle]}
        >
            {text}
        </Typography>
        </Button>

    
  )
}
