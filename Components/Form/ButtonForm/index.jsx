import React from 'react'
import Button from '../../Button'
import colors from '../../../settings/colors'

export default props => {

    const {text, style = {}, onClick, textStyle} = props

  return (
    <Button text = {text || "Continuar"} 
    style = {{
        background: colors.color2,
        width: style.width || "304px",
        height: style.height || "49px !important",  
        borderRadius: "5px",
        fontSize: "14px",
        mt: style.marginTop,
        color: colors.color1,

        "&:hover": {
            borderColor: colors.color2,
            color: colors.color2
        }
    }}

    textStyle= {textStyle}
    onClick = { e=> onClick()}
    />
  )
}
