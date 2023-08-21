import { BorderBottom } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'
import colors from '../../settings/colors'

export default props => {
    const {type} = props
  return (
    <Stack sx = {{
        height: "5px",
        flex: 1,
        borderBottom: "1px "+(type ? type : "solid")+" #BCBCBC"
    }} />
  )
}
