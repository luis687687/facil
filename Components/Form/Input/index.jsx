import { InputAdornment, Stack, TextField } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import React from 'react'
import colors from "../../../settings/colors"

require("./index.css")
 

export default function index(props) {
  
  
  const {label, variant, icon, image, value, style = {}, background, onChange, disabled, select} = props
  return (
    <TextField
      SelectProps={{
        placeholder: "Selectee"
      }}
      
      sx = {[{
        m:0,
        border: "0.6px solid rgba(0, 0, 0, 0.17)",
        borderRadius: "2px",
        "& .MuiInputBase-root": {
          height: "53px",
          background: background ? background: "transparent",
          
        },

        "& .MuiInputBase-root:hover": {
          background: "transparent",
          borderBottom: "none"
        },

        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before" : { //hover border\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\++
          border: "none"
        },

        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:before": { //comum border filled
          border: "none",

        },

        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:after":{ //active border filled
          borderBottom: "none !important",
          
        },

        "& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { //label
          color: "rgba(42, 45, 53, 0.61)"
        },

        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root.Mui-focused":{ //fundo
          background: "none"
        },

        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root.Mui-disabled": { //back disabled
          backgroundColor: "transparent !important"
        },
        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root.Mui-disabled:before": { //border disabled
          border: "none !important"
        },

        "& .css-zs07ro-MuiInputBase-root-MuiFilledInput-root.Mui-focused": {
          background: "transparent"
        },

        "& .css-zs07ro-MuiInputBase-root-MuiFilledInput-root:before": {
          border: "none"
        }

       
      }, style]}

      variant={variant || "filled"}
      
      label={label}

      focused

      InputProps={{
        endAdornment: (
          image && <InputAdornment position="end">
            <img src={image} />
          </InputAdornment>
        ),
       
        

        
      }}
      
      value={value}
      onChange={ event => onChange(event.target.value)}
      disabled = {disabled}
      select={select}
    />
        /* <TextField label={label} variant="outlined" 
          sx={[{
            m:0,
            
          },
            style]}
          
          InputProps={{
            endAdornment: (
              image && <InputAdornment position="end">
                <img src={image} />
              </InputAdornment>
            ),

            

            
          }}
          

          select={selector}
        /> */
        

  )
}


