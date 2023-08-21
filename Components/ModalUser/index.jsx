import { IconButton, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import colors from '../../settings/colors'
import fonts from '../../settings/fonts'
import sizes from '../../settings/sizes'
import imgEdit from "../../assets/icon/edituser.svg"
import imgBook from "../../assets/icon/book.svg"
import imgSettings from "../../assets/icon/settings.svg"
import imgInfo from "../../assets/icon/info.svg"
import imgLogout from "../../assets/icon/logout.svg"
import { meuContexto } from '../../Context'


const textStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "200px",
    textOverflow: "ellipsis",
}
export default props => {

    const {
        global_open_edit_user_modal, setOpenEditUserModal, setOpenUserModal, global_userLogado, setGlobalUserLogado
    } = useContext(meuContexto)
    const openMeusBooks = e => {
        closeModal()
        document.getElementById("link_minhas_reservas").click()
    }

    const closeModal = e => {
        setOpenUserModal(false)
    }
    const logout = e => {
        setGlobalUserLogado({})
        closeModal()
    }
  return (
    <Stack>
    <Stack sx = {{
        position: "fixed",
        width: "100%",
        height: "100%",
        
        m:0,
        zIndex: "30",
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: "row"
        
    }} onClick={ e => closeModal()}>
    </Stack>

        <Stack sx = {{
            fontFamily: fonts.medium,
            color: colors.cardCarTitle,
            fontSize: "14px",
            mt: "40px",
            zIndex: 40,
            scale: "0.8",
            position: "fixed",
            right: "30px"
            
        }}>
        <Stack sx = {{
                width: "410px",
                //height: "471px",
                borderRadius: "24px",
                background: colors.color1,
                p: "32px",
                pt: "45px",
                
                
                }}>
                <Stack sx = {{
                    flexDirection: "row",
                    alignItems: "flex-start"
                    
                }}>
                    <Stack sx = {{
                        mb: "68px"
                    }}>
                        <Typography sx = {{
                            fontSize: "25px",
                            fontFamily: fonts.bold,
                            //textOverflow: "c"
                            
                            mr: "18px",
                            ...textStyle
                        }}>
                            Luis Domingos Marques
                        </Typography>
                        <Typography sx = {{
                            fontFamily: fonts.regular,
                            ...textStyle
                        }}>
                            luismarques687@hotmail.com
                        </Typography>
                    </Stack>
                    <IconButton onClick={
                        e => {
                            setOpenEditUserModal(!global_open_edit_user_modal)
                        }
                    }>    
                        <img src = {imgEdit} style={{ width: sizes.icon, height: sizes.icon}} />
                    </IconButton>
                </Stack>
                <Stack sx = {{
                    mb: "90px"
                }}>
                    <UserOption text = "Meus Books" icon = {imgBook} onClick = {openMeusBooks}/>
                    <UserOption text = "Configurações" icon = {imgSettings} />
                    <UserOption text = "Centro de suporte" icon = {imgInfo} />
                </Stack>
                <UserOption text = "Sair da Conta" icon = {imgLogout} onClick = {logout}/>

        </Stack>

        {global_open_edit_user_modal &&
       
            <Stack sx = {{
                background: "#D9D9D9",
                mt: "20px",
                borderRadius: "24px",
                p: "32px",
                pl: "26px",
                
                
            }}>
                 
                    <>
                    <UserOption text = "Actualizar Foto"  />
                    <UserOption text = "Remover Foto"/>
                    </>
                    
            </Stack>
            }
    </Stack>
   </Stack>
  )
}

const UserOption = props => {

    const {
        icon, 
        text,
        onClick
    } = props

    return(
        <div onClick={onClick}>
            <Stack sx = {{
                flexDirection: "row",
                pb: "5px",
                mb: "14px",
                cursor: "pointer",
                borderBottom: "1px solid transparent",
                "&:hover": {
                    fontFamily: fonts.bold,
                    borderBottom: "1px solid "+colors.cardCarTitle+"50"
                }
            }}>
                {icon && <img src={icon} style = {{
                    width: sizes.icon,
                    height: sizes.icon,
                    marginRight: "12px"
                }} />}
                <Typography sx = {{
                    ...textStyle
                }}>
                    {text}
                </Typography>
            </Stack>
        </div>
    )
}