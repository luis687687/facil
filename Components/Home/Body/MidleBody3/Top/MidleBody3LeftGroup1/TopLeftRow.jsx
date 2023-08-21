import { Stack } from '@mui/material'
import React from 'react'
import { CardTextLeavel } from '../../../../../Card'
import colors from '../../../../../../settings/colors'

export default function TopLeftRow(props) {
  const {body, icon, title, noborder, image} = props
  return (
   <Stack
    sx = {{
        m:0,
       
        pb: "60px",
        mb: "36px",
        height: "193px",
        width: "817px",
        borderBottom: !noborder && "1px solid "+colors.borderForte,
        justifyContent: "flex-start",
        overflow: "hidden"
    
    }}
    direction={"row"}
   >
        <CardTextLeavel 
            image = {image}
            icon={icon}
            title={title}
        />
        <CardTextLeavel 
            body={body}
        />

   </Stack>
  )
}
