import { CardMedia, Stack } from '@mui/material'
import React from 'react'
import { ButtonForm, TitleShort } from '../..'
import sizes from '../../../settings/sizes'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'
import backlogo from "../../../assets/icon/logo2.svg"
import { useContext } from 'react'
import { meuContexto } from '../../../Context'
import { Link } from 'react-scroll'
import { useEffect } from 'react'


export default props => {

    const {children, title, onclick, img, direction, style, titleStyle = {}, nowidth, noHeight, centerChildren, nobutton, onClick} = props
    const {
         global_screen,
         moveStepCompra, setLeasingStep} = useContext(meuContexto)

    const click = e => {

        if(onClick)
            onClick()
        else
            moveStepCompra(0)
    }




  return (
    <Stack sx = {{width: nowidth && "100%"}}>
            <Stack
            sx = {[{
                width: nowidth || "805px",
                borderRadius: "2px",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                pt: sizes.cardPaddingTop,
                flexDirection: direction || "row",
                pl: "37px",
                pr: "37px",
                pb: nowidth ? "27px" : "96px"

            }, style]}
        >
            
            {title && <Stack>
                    <TitleShort text = {title} style = {{
                        mb: titleStyle.mb || "40px",
                        color: colors.cardCarTitle,
                        fontFamily: fonts.regular
                    }}/>
                
                
                {
                img && <CardMedia sx = {{
                    width: "366px",
                    height: "463px",
                    borderRadius: "9px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    mr: "56px"}}

                    image={img}> 
                    <img src = {backlogo} />
                </CardMedia>}
            </Stack>}

                <Stack sx = {{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: centerChildren && "center"
                }}>
                    {children}
                </Stack>
                
                {
                    nobutton ||
                    <>
                    { nowidth &&
                        <ButtonForm  text = {"Continuar"} style = {{
                        marginTop: "28px" }} onClick = { e=> click()}/>
                    }
                    </>
                }
            </Stack>

            {
            nobutton ||
            <>
            { nowidth ||
                <ButtonForm  text = {"Continuar"} style = {{
                marginTop: "28px" }} onClick = { e=> click()}/>
            }
            </>}
    </Stack>
  )
}
