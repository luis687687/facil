import React from 'react'
import colors from '../../../../settings/colors'
import { Box, CardMedia, Stack } from '@mui/material'
import {CardOpenAccount, CardTextLeavel} from "../../../Card"
import { BoxDescript } from '../../../Box'
import Top from './Top'
import Buttom from "./Bottom"

export default () => {
  return (
    <Stack
        sx = {{
            m: 0,
            width: "100%",
            backgroundColor: colors.color2,
            mt: "148px",
            pt:"175px",
            pb:"149px"
        }}

    >
        <Top />
        <Buttom />
        
        

    </Stack>
  )
}




