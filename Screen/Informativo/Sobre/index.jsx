import { CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import fonts from '../../../settings/fonts'
import colors from '../../../settings/colors'
import img1 from "../../../assets/Informativo/back.png"


export default props => {
  return (
    <>
    <Stack sx = {{
        mt: "51px",
        background: "rgba(194, 167, 113, 0.14)",
        p:0,
        
        
    }}>
        <Line title = {"Uma ideia que ganhou vida"} 
        body = {"Nada é mais frustrante do que lidar com problemas no seu carro, mas estamos aqui para ajudar! Nossa oficina especializada conta com uma equipe altamente capacitada e equipamentos de ponta para diagnosticar e resolver qualquer inconveniente mecânico ou elétrico que seu veículo possa estar enfrentando. Agende um horário conosco e tenha a certeza de que seu carro será tratado com o máximo de cuidado e atenção. Sua segurança e satisfação são nossa prioridade, e faremos tudo ao nosso alcance para deixá-lo novamente na estrada com total tranquilidade. Conte com a gente para deixar seu carro em perfeitas condições novamente!"} 
        image = {img1}/>



    <Line title = {"Uma ideia que ganhou vida"} 
        body = {"Nada é mais frustrante do que lidar com problemas no seu carro, mas estamos aqui para ajudar! Nossa oficina especializada conta com uma equipe altamente capacitada e equipamentos de ponta para diagnosticar e resolver qualquer inconveniente mecânico ou elétrico que seu veículo possa estar enfrentando. Agende um horário conosco e tenha a certeza de que seu carro será tratado com o máximo de cuidado e atenção. Sua segurança e satisfação são nossa prioridade, e faremos tudo ao nosso alcance para deixá-lo novamente na estrada com total tranquilidade. Conte com a gente para deixar seu carro em perfeitas condições novamente!"} 
        image = {img1} invert/>


       
    </Stack>

    <Stack sx = {{
            height: "620px",
            width: "100%",
            flexDirection: "row",
            background: colors.color2,
            mt: "54px"
        }}>
            <Stack sx = {{
                flex: 1,
                height: "100%"
            }}/>
            <Stack  sx = {{
                flex: 1,
                height: "100%",
                

            }}>
                <Stack sx = {{
                    flex:1,
                    width: "100%",
                    background: "#255A3E",
                }}/>

                <Stack sx = {{
                    flex:1,
                    width: "100%",
                    flexDirection: "row",
                    background: "#1A7217"
                }}>
                    <Stack sx = {{
                        height: "100%",
                        flex: 1
                    }}/>
                    <Stack sx = {{
                        background: "#2F6F2D",
                        height: "100%",
                        flex:1
                    }}/>

                </Stack>
            </Stack>

        </Stack>

        <Typography sx ={{
            fontFamily: fonts.semibold+" !important",
            fontSize: "40px",
            ml: "169px",
            mt: "85px",
            mr: "388px"
        }}>
            Nossas raízes são o que nos impulsionam. Conheça nossa história.
        </Typography>
    </>

    
  )
}


const Line = props => {
    const {invert, body, title, image} = props

    return(
        <Stack sx = {{
            flexDirection: invert ? "row-reverse" : "row",
            alignItems: "center",
            flexWrap: "wrap",
            p: 0
            
        }}>
            <Stack sx = {{
                width: "149px",
                height: "3px"
            }}/>{/***limiter */}

            <Stack sx = {{
               width: "520px",
               
            }}>
                <Typography sx = {{
                    fontSize: "30px",
                    fontFamily: fonts.semibold+" !important",
                    color: colors.cardCarTitle,
                    mb: "20px"
                }}>
                    {title}
                </Typography>

                <Typography sx = {{
                    fontSize: "14px",
                    color: "#000"
                }}>
                    {body}
                </Typography>
            </Stack>
            <Stack sx = {{
                width: "95px",
                height: "3px"
            }}/>{/***limiter */}
            
            <CardMedia 
                sx = {{
                    width: "700px",
                    height: "559px",
                    backgroundSize: "cover",
                   
                    
                }}

                image = {image}
            />
            <Stack sx = {{
                width: "64px",
                height: "3px"
            }}/> {/***limiter */}

        </Stack>
    )
}
