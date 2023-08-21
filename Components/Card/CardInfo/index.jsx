import { Stack, Typography } from '@mui/material'
import React from 'react'
import fonts from '../../../settings/fonts'

export default props => {

    const {text, style} = props
  return (
    <Stack sx = {[{
        width: "149.139px",
        height: "49px",
        borderRadius: "5px",
        background: "#F3F3F3",
        alignItems: "center",
        justifyContent: "center",
        mb: "11px"

    }, style]}>
        <Typography
            sx = {{
                fontFamily: fonts.medium,
                fontSize: "12px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
            }}
        >
            {text}
        </Typography>
    </Stack>
  )
}
