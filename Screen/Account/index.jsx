import { Avatar, CardMedia, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import colors from '../../settings/colors'
import fonts from '../../settings/fonts'
import { Footer } from '../../Components'
import { Input } from '../../Components/Form'
import { meuContexto } from '../../Context'


const border = "0.6px solid rgba(0,0,0,0.17)"
export default props => {

    const {global_userLogado} = useContext(meuContexto)
    const avatar = global_userLogado.avatar
    
  return (
    <Stack>
        <Stack sx = {{
            
            width: "100%",
            
            background: colors.color2,
            pl: "152px",
            pt: "50px",
            pb: "51px",
            color: colors.color1+ " !important",
            mb: "50vh"
            

        }}>
            <Stack>
                <Typography sx = {{
                    mb: "25px",
                    
                    fontSize: "20px",
                    fontFamily: fonts.semibold,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: 'nowrap'
                }}>
                    Seus Dados
                </Typography>
                <Stack sx = {{
                    flexDirection: "row",
                    alignItems: "flex-end"
                }}>
                    {
                    avatar ?
                    <CardMedia 
                        sx = {{
                            width: "98px",
                            height: "98px",
                            borderRadius: 100,
                            background: "#fff",
                            mr: "21px",
                            backgroundSize: "cover"
                            
                        }}
                        image = {avatar}
                    />
                :
                    <Avatar sx = {{
                        width: "98px",
                        height: "98px"
                    }}/>}
                    <Typography sx = {{
                        textDecorationLine: "underline"
                    }}>Actualizar a sua foto</Typography>
                </Stack>
            </Stack>

        </Stack>
        
        <CardUser />
        <Footer />        
    </Stack>
  )
}



const CardUser = props => {

    return(
        <Stack
            sx = {{
                p: "39px",
                zIndex: 1,
                background: colors.color1,
                borderRadius: "16px",
                color: colors.cardCarTitle+ " !important",
                position: "absolute",
                right: "149px",
                marginTop: "10vh"
            }}
        >
            <Stack sx = {{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
                
            }}>
                <Typography sx = {{
                    
                    fonSize: "20px",
                    fontFamily: fonts.semibold+' !important'
                }}>
                    Dados Pessoais
                </Typography>
                <Typography sx = {{
                    p: "19px",
                    pt: "8px",
                    pb: "8px",
                    fontSize: "12px",
                    border,
                    borderRadius: "30px",
                }}>
                    Editar dados
                </Typography>
            </Stack>

            <Stack sx = {{
                border,
                
                maxWidth: "700px",
                flexWrap: "wrap",
                justifyContent: "space-between",
                mt: "31px",
                p: "10px",
                pl: "0px",
                alignItems: "center",
                borderRadius: "2px"
            }}>
                <Stack sx = {{
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                <LocalInput label = "Nome e sobrenome"/>
                <LocalInput label = "Email de Utilizador"/>
                </Stack>

                <Stack sx = {{
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                <LocalInput label = "Sexo"/>
                <LocalInput label = "Telefone"/>
                </Stack>
            </Stack>

            <Typography sx = {{
                    
                    fonSize: "20px",
                    fontFamily: fonts.semibold+' !important',
                    mt: "42px"
                }}>
                    Endereço Pessoal
                </Typography>

                <Stack sx = {{
                border,
                
                maxWidth: "700px",
                flexWrap: "wrap",
                justifyContent: "space-between",
                mt: "31px",
                p: "10px",
                pl: "0px",
                
                borderRadius: "2px"
            }}>
                <Stack sx = {{
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                <LocalInput label = "Província"/>
                <LocalInput label = "Município"/>
                </Stack>

                <Stack sx = {{
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                <LocalInput label = "Endereço"/>
                
                </Stack>
            </Stack>
        </Stack>
    )
}

const LocalInput = props => {

    const {label, value, onChange} = props

    return(
        <Stack sx = {{
            mr: "10px",
            ml: "10px",
            mb: "10px"
        }}>
            <Input label = {label} value = "Definido" />
        </Stack>
    )
}
