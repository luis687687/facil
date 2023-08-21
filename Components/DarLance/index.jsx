import { Stack, Typography } from '@mui/material'
import React, {useEffect, useContext} from 'react'

import { meuContexto } from '../../Context'
import { CarStepDetails, CardStepLeft, CardStepRight } from '../Card'
import { ButtonForm, TitleShort } from '..'
import colors from '../../settings/colors'
import back from "../../assets/reservas/back1.png"
import fonts from '../../settings/fonts'
import { Input } from '../Form'

export default props => {

    const {carro, title} = props

    const {setEstiloAlterado, global_dar_lance} = useContext(meuContexto)

   

    return(
        <>
            <TitleShort text={title} style={{
                color: colors.cardCarTitle,
                m: 0,
                mb: "32px"
            }}/>
        
        <Stack sx = {{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
        
        }}>
            <CardStepLeft nobutton style = {{
                    
                    mr: "20px",
                    
            }}   img = {back} title = "Fotos de Veículos">
                <CarStepDetails />

            </CardStepLeft>

            <CardStepRight style = {{
                m: 0,
                width: "200px",
                flex: 1,
                pl: "31px",
                pr: "29px"
                
            }}
                caixinha = "24h"
                title="Todos os Lances"
            >
                <Lances active cima = ""/>
                <Lances mt = "37px" tempo = "12h:30"/>
                <Lances my mt = "37px" tempo = "13h:35"/>

                
                    <Typography sx = {{
                        fontSize: "14px",
                        color: colors.color2,
                        mt: "64px",
                        mb: "16px"
                    }}>
                        Submeter Lance
                    </Typography>
                    <Input style = {{
                        width: "100%",
                        

                    }}/>
            
                    <ButtonForm text = "Submeter Lance" style = {{
                        marginTop: "29px",
                        width: "100%",
                        
                        
                    }} />
                
              
                
                
            </CardStepRight>
            
        </Stack>

        </>
    )
}

const Lances = props => {

    const {active, my, mt, tempo} = props

    const colorMy = "#FF8F27"
    const colorBack = active && colors.color2
    const colorFont = active ? colors.color1 : my && colorMy
    

    


    return(
        <Stack
        sx = {{
            pt: "13px",
            background: colorBack,
            borderRadius: "4px",
            color: colorFont,
            pl: "14px",
            pr: "14px",
            mt,
            width: "100%"
            
        }}
    >
        <Stack
            sx = {{
                background: (!active && my) && colorMy,
                width: "fit-content",
                p: "3px",
                pl: "7px",
                pr: "7px"
            }}
        >
        <Typography sx = {{
            fontSize: "14px",
            color: active ? colors.color1 : my ? colors.color1 : "#2A2D35"
        }}>
            Lance Inicial
        </Typography>
        </Stack>
        <Stack sx = {{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }}>
            <Typography sx = {{
                fontSize: "32px",
                fontFamily: fonts.bold
                
            }}>
                AO 12.000.000
            </Typography>
            <Typography sx = {{
                fontSize: "14px",
                fontFamily: fonts.regular,
                color: colors.color2
            }}>
                {tempo}
            </Typography>
        </Stack>

    </Stack>   
    )
}