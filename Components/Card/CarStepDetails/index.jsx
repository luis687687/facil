import React from 'react'
import CardInfo from '../CardInfo'
import { IconButton, Stack, Typography } from '@mui/material'
import { TitleShort } from '../..'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'
import sizes from '../../../settings/sizes'
import imgLocation from "../../../assets/icon/location.svg"

export default props => {

  return (
   <>
                    <Stack sx = {{
                    flexDirection: "column",
                    justifyContent: "space-between",
            
                }}>
                    <TitleShort text = {"Detalhes do veículo"} style = {{
                            m: 0,
                            color: colors.cardCarTitle,
                            fontFamily: fonts.regular
                        }}/>
                        
                        <Typography sx = {{
                            fontFamily: fonts.medium,
                            fontSize: "14px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            color: "#9C9C9C",
                            mb: "40px",
                        }}>
                            Citroen Duster 2.1, Jetour x70, Suziki Vitara 
                        </Typography>
                        <Stack sx = {{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between"
                        }}>
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                            <CardInfo text = "4 Portas" />
                        </Stack>

                        <Stack sx = {{
                            flexDirection: "row",
                            alignItems: "center",
                            mt: "29px"
                        }}>
                            <img src = {imgLocation} style = {{
                                width: sizes.icon,
                                height: sizes.icon,
                                mr: "6px"
                            }}/>
                            <Typography sx = {{
                                fontFamily: fonts.regular,
                                fontSize: "14px"
                            }}>
                                Maianga, Largo Serpa Pinto
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack sx = {{
                        flexDirection: "row",
                        
                    }}>
                        <Indicator />
                        <Indicator />
                        <Indicator active/>

                    </Stack>
   </>
  )
}

const Indicator = props => {

    const {active} = props
    return(
        <IconButton
            sx = {{
                m: "0px",
                mr: "0px",
            }}
        >
            <Stack sx = {{
                
                width: "11px",
                height: "11px",
                borderRadius: 100,
                background: active ? colors.color2 : "#D9D9D9"
            }}/>

        </IconButton>
    )
}


