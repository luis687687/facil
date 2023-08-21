import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import {Body} from "../../Components/Home"
import {Footer} from "../../Components"
import { meuContexto } from '../../Context'


export default () => {

  return (
    <Stack>
      <Body />
      <Footer />
    </Stack>
  )
}

