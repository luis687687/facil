import { Stack, Typography } from '@mui/material'
import React from 'react'
import { TitleShort } from '../..'
import colors from '../../../settings/colors'
import fonts from '../../../settings/fonts'
import sizes from '../../../settings/sizes'

export default props => {

    const {children, title, caixinha, obs, style, nowidth, noHeight} = props
  return (
    <Stack
    sx = {[{
        width: nowidth || "366px",
        
        borderRadius: "2px",
        border: "1px solid rgba(0,0,0,0.05)",
        pt: sizes.cardPaddingTop,
        pl: "36px",
        pb: "35px",
        //maxHeight: noHeight || "653px",
        fontFamily: fonts.medium
    }, style]}
>
            <Stack
                sx={{
                flexDirection:  "row",
                pb: "22px"
                }}
            >
              <TitleShort text = {title} style = {{
                color: colors.cardCarTitle,
                fontFamily: fonts.medium,
                fontSize: "20px",
                m: 0
              }} />
                
                {
                caixinha && <Stack sx = {{
                    borderRadius: "2px",
                    background: "#074D1D",
                    p: "5px",
                    pl: "13px",
                    pr: "12px",
                    ml: "12px"
                    
                  }}>
                    
                        
                         <Typography
                      sx = {{
                        color: colors.color1,
                        fontSize: "14px",
                        fontFamily: fonts.medium
                      }}
                    >{caixinha}</Typography>
                  </Stack>
                    }
    
        </Stack>

        {children}
        {
        obs && 
            <Stack sx = {{
                height: "48px",
                width: "285px",
                overflow: "hidden",
                pr: "10px"
                }}>
                
                
            <Typography

                    sx = {{
                    textOverflow: "ellipsis",
                    fontSize: "14px",
                    overflow: "hidden",
                    
                    fontFamily: fonts.regular,
                    
                    }}
                >
                    {obs}
                </Typography>
            </Stack>
        }
    </Stack>
  )
}


