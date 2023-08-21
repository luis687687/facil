import { ArrowBack, ArrowBackIos, ArrowBackIosNew, BackHand } from '@mui/icons-material'
import { Button, Icon, IconButton, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import colors from '../../settings/colors'
import fonts from '../../settings/fonts'
import iconBack from "../../assets/icon/back.svg"
import { Link } from 'react-router-dom'
import { meuContexto } from '../../Context'

export default props => {

    const {eventBack, defaultBack} = props

    const {setGlobalScreen} = useContext(meuContexto)

    

    const voltarOuIrParaHome = e => {

        if(defaultBack){
            document.getElementById("home").click()
            setGlobalScreen(window.location.pathname.split("/")[1])
            
        }else
            {
                eventBack()
            }
    }

  return (
    <div>
        
        
        <div onClick={
            e=> {
                voltarOuIrParaHome()}
                }>
            <Stack
                sx = {{
                    flexDirection: "row",
                    
                    alignItems: "center"
                }}
            >
                <IconButton>
                <img src = {iconBack} style = {{
                    
                }}/> 
                </IconButton>
                <Typography 
                sx={{
                    color: colors.color2,
                    fontFamily: fonts.medium,
                    fontSize: "17px",
                    fontStyle: "normal",
                    fontWeight: "400"
                }}
            >Voltar</Typography>
            </Stack>
        </div>
    </div>
  )
}
