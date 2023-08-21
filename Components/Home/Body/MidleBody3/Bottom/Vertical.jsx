import { Stack } from '@mui/material'
import React from 'react'
import { CardTextLeavel } from '../../../../Card'

export default function Vertical() {
  return (
    <Stack
        sx = {{
            m:0,
            flexDirection: "column"
        }}
    >
        <CardTextLeavel
            border
            title = "Detalhes do Veículo desejado"
            number="01"
            body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança. Estamos a trabalhar com os nossos parceiros para lhe dar a segurança."
            />
        <CardTextLeavel
            border
            title = "Faça login ou confirme seus dados"
            number="02"
            body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança. Estamos a trabalhar com os nossos parceiros para lhe dar a segurança."
            />
        <CardTextLeavel
            border
            title = "Detalhes do Veículo desejado"
            number="03"
            body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança. Estamos a trabalhar com os nossos parceiros para lhe dar a segurança."
            />

      <CardTextLeavel
     
            title = "Detalhes do Veículo desejado"
            number="04"
            body = "Estamos a trabalhar com os nossos parceiros para lhe dar a segurança. Estamos a trabalhar com os nossos parceiros para lhe dar a segurança."
            />
        
    </Stack>
  )
}
