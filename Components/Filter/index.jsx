
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'
import { Input } from '../Form'
import sizes from '../../settings/sizes'
import search from "../../assets/icon/search.svg"
import { Button } from '..'
import fonts from '../../settings/fonts'

require("./index.css")

export default e => {
    const {style} = e
  return (
    <Stack
        sx = {[{
            
            
            pl: sizes.paddingCard,
            pr: sizes.paddingCard,
           
            
           
        }, style]}
    >
        
        <Box 
        className='filter'
        sx ={{
          
           
           display: "flex",
           flexDirection: "row",
           justifyContent: "space-between",
           alignItems: "center",
           background: colors.color1,
          
            width: "100%",
            pt: "16px",
            
            pl: "28px",
            pr: "26px",
           borderRadius: "1px",
           boxShadow: "0px 0px 2px #bbb",
           flexWrap: "wrap"
        }}>
            <Typography sx = {{
                color: "#000",
                fontFamily: fonts.bold+" !important",
                mb: "10px"
            }}>
                Encontrar carros 
            </Typography>
        <Stack sx = {{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap"
        }}>
       
           
            


            <Stack
            sx ={{
                m: 0,
                
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                 <BoxComponent text = "O que procuras ?" />
                
                <BoxComponent text = "Provincia" />
                <BoxComponent text = "Marca" />
                <BoxComponent text = "Procurar agora" button/>
               

            </Stack>

        </Stack>

        </Box>
       

    </Stack>
  )
}

const BoxComponent = e=> {

    const {button, text} = e
    const height = "53px"
    return(
        <Stack 
            sx = {{
                m:0,
                pl: "15px",
                pb: "18px",
            }}
        >
            {button ?
             <Button text = {text} style = {{
                background: colors.color2,
                color: colors.color1,
                width: "193px",
                height: "53px",
                borderRadius: "2px",
                
                "&:hover": {
                    color: colors.color2,
                    border: "1px solid "+colors.color2
                },
                
            }} onClick = {e=>{}}/>
            :
            <Stack
                sx ={{
                 
                }}
            >
                <Input label = {text}
                    style = {{
                        height: "50px",
                        background: "#F6F6F6"
                    }}
                    
                    onChange= { e => 1}
                    

                    />
            </Stack>
            }
        </Stack>
    )
}
