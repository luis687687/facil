import { Stack } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { meuContexto } from "../../Context"
import PageIndicator from "../../Components/PageIndicator"
import sizes from "../../settings/sizes"
import { Button, Footer, StepList, TitleShort } from "../../Components"
import colors from "../../settings/colors"
import { CardCarDetails, CardOthers } from "../../Components/Card"
import {Step1, Step2, Step3, Step4} from "../../Components/Steps"
import { useState } from "react"


/* <StepIndicator title = "Detalhes do veiculo" step = "01"  icon = {imgNota} active = {stepCompra >= 1} edit = {stepCompra > 1} value = {1}/>
        <StepIndicator title = "Entrar na conta" step = "02" icon = {imgUser} active = {stepCompra >= 2} edit = {stepCompra > 2} value = {2}/>
        <StepIndicator title = "Pagamento" step = "03" icon={imgPago} active = {stepCompra >= 3} edit = {stepCompra > 3} value = {3}/>
        <StepIndicator title = "Finalizado" step = "04" semtraco icon = {imgFim} active={stepCompra >= 4} edit = {stepCompra > 4} value = {4}/> */

import imgNota from "../../assets/icon/nota.svg"
import imgUser from "../../assets/icon/user2.svg"
import imgPago from "../../assets/icon/nota.svg"
import imgFim from "../../assets/icon/fim.svg"
import imgPaper from "../../assets/icon/paper.svg"
import { Link } from "react-router-dom"




export default props => {
    const {setGlobalTopTitle} = useContext(meuContexto)
    
    
    const {stepCompra, moveStepCompra, global_screen, setGlobalScreen,
         leasing_steps, setLeasingStep} = useContext(meuContexto) //Controlador de steps
   
    const isLeasing = (leasing_steps >= 1)

    const backClick = e => {
        
        if(stepCompra  == 1 || stepCompra == 4 || leasing_steps == 2){
            document.getElementById("home").click() //home
            setGlobalScreen(window.location.pathname.split("/")[1]) //actualiza a tela info         
        }else
            {

                if(isLeasing)
                    setLeasingStep(0)
                else
                    moveStepCompra(-1)
            }
    
    }


    const lista_steps_leasing = [    {
        title: "Detalhes do Leasing",
        step: "Passo 01",
        icon: imgNota,
       
        
    },
    {
        title: "Finalizar",
        step: "Passo 02",
        icon: imgPaper,
        semtraco: true
      
    }
]


    const lista_steps = [{
        title: "Detalhes do veículo",
        step: "Passo 01",
        icon: imgNota,
        value: 1,
        
    },
    {
        title: "Entrar na conta",
        step: "Passo 02",
        icon: imgUser,
        value: 4,
    },{
        title: "Pagamento",
        step: "Passo 03",
        icon: imgPago,
        value: 5,
    },{
        title: "Finalizado",
        step: "Passo 04",
        icon: imgFim,
        value: 6,
        semtraco: true
    },
]

 
    return(

        <Stack>
                <Stack
                    sx = {{
                        
                        alignItems: "center"
                        
                    }}
                >
                    <Stack sx = {{
                        width: sizes.widthReservaComponent,
                        mb: "50px"
                        }}>
                            <Link to = "/" id="home" />

                        <PageIndicator eventBack = { e=> backClick()} valorEvento = {stepCompra} actual = {isLeasing ? "Leasing seu Veículo" : "Reserva para Compra"}/>

                        {
                            isLeasing ?
                            <StepList border  
                            steps = {lista_steps_leasing} stepValor={leasing_steps} mudaStep = {setLeasingStep} style = {{pr: "115.59px"}}/>
                            :
                            <StepList steps = {lista_steps} stepValor = {stepCompra} mudaStep = {moveStepCompra} />
                        }
                        
                     
                            {(leasing_steps < 2) && <>
                                {stepCompra == 1 && <Step1 title = {isLeasing ? "Fazer Pedido de Leasing " : "Reservar para comprar"} />}
                                {stepCompra == 2 && <Step2 title = "Entrar na conta" />}
                                {stepCompra == 3 && <Step3 title = "Pagamento" />}
                            </>   }
                            {(stepCompra == 4 || leasing_steps == 2) && <Step4 title = "Pedido finalizado" />}
                                
                           
                     
                        
                    </Stack>
                </Stack>

            <Footer />
        </Stack>
    )
}