import { CardMedia, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import colors from '../../settings/colors'
import BoxDescript from '../Box/BoxDescript'
import sizes from '../../settings/sizes'
import AOS from 'aos'
import "aos/dist/aos.css"

export default props => {
    const {img} = props

    // useEffect(e=>{

    // }, [])

    
    useEffect(
        e => {
            AOS.init()
            
        }, []
    )

    const altura = "345px"

    

  return (
    <Stack
        sx = {{
            m:0,
        }}
        
    >
        <CardMedia 
                sx = {{
                    m:0,
                    height: 344,
                    width: "100%",
                    position: "fixed",
                    zIndex: -2,
                    backgroundSize: "cover"
                    
                }}
                image={img}
        />
       
        <Stack 
            sx={{
                m:0,
                position: "absolute",
                height: 344,
                width: "100%",
                
               padding: sizes.paddingCard,
               pt: sizes.paddingCard-5
            }}>
            
                <BoxDescript
                    title = {"Os melhores corro em um  só lugar"}
                    body = {"Bem barato, todo mundo quer"}
                    titleStyle = {{
                        color: colors.color1,
                        
                        fontFamily: "Epilogue",
                        fontSize: "41px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "normal",
                    }}
                    />

        </Stack>
        
        <Stack sx={{height: 344,}} /> {/* separator */}

        

    </Stack>
  )
}
