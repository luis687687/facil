import { Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { BackButton, CarsArea, Filter, Footer, TitleShort } from '../../Components'
import { CardCar } from '../../Components/Card'
import { description } from '../../Api'
import image from "../../assets/Comprar/car.png"
import fonts from '../../settings/fonts'
import { useContext } from 'react'
import { meuContexto } from '../../Context'
import DarLance from '../../Components/DarLance'
export default props => {

    const textColor = "rgba(42, 45, 53, 0.69)"
    const {setGlobalDarLance, global_dar_lance, setGlobalScreen} = useContext(meuContexto)

    const darLance = e => {
        setGlobalDarLance(true)
    }

    const onBack = e => {

        if(global_dar_lance)
        {
            setGlobalDarLance(false)
            return
        }
        document.getElementById("home").click()
        setGlobalScreen(window.location.pathname.split("/")[1])
    }


  return (


    <Stack sx = {{
        width: "100%",
    }}>
            <Stack sx = {{
                mt: "58px",
                mn: "30px"
            }}>
                
                {global_dar_lance && <Stack sx = {{
                        mb: "34px",
                        pl: "154px"
                    }}>
                        <BackButton eventBack = {onBack} />
                </Stack>}

                <Stack sx = {{mb: "34px"}}>
                    
                    <Filter />
                </Stack>
                
                <Stack sx= {{
                    pl: "154px",
                    pr: "153px"
                }}>
      
                 
                    
                    {
                        global_dar_lance ?
                            <DarLance title = {"Detalhes do carro"}/>
                            :
                            <>
                                   <Stack sx = {{mb: "29px"}}>
                                    <TitleShort text = "Veículos disponíveis para Lances" style = {{
                                        fontSize: "32px",
                                        color: textColor,
                                        m: 0,
                                        fontFamily: fonts.semibold
                                    }}/>
                                </Stack>
                                <CarsArea buttonText = {"Dar Lance"} onClick = { e=> darLance()}/>
                            </>
                            
                    }
                    

                </Stack>
            </Stack>
            
    </Stack>

  )
}
