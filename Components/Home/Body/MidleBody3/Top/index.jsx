import React from 'react'
import { CardOpenAccount } from '../../../../Card'
import { CardMedia, Stack } from '@mui/material'
import { BoxDescript } from '../../../../Box'
import colors from '../../../../../settings/colors'
import MidleBody3LeftGroup1 from './MidleBody3LeftGroup1'

export default () => {
    return(
        <Stack
            sx = {{
                m: 0,
            }}
                direction={"row"}
                justifyContent={"center"}
            >
                <CardOpenAccount />
                <MidleBody3LeftGroup1 />

            
              

            </Stack>
    )
}