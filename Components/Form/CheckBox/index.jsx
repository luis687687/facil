import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function index(props) {

    const {color, label} = props
  return (
    <FormControlLabel control={
    <Checkbox sx={{
        color: color,
        m: 0,
        "&.Mui-checked":{
            color: color
        }
    }} />
} label={label} />
  )
}
