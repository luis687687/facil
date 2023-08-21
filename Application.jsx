import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from "./Routes"
import {TopBar} from './Components'
import Context, { meuContexto } from './Context'


export default () => {
    /****
   * Controladores para estado visual do topbar e de user logado
  */
    const {setGlobalUserLogado} = useContext(meuContexto)

    const goToLogin = e => {
      
      document.getElementById("link_login").click()
      //setGlobalUserLogado({...global_userLogado, logado: true})
      setGlobalScreen()
      setTopController()
    }
    const {
      
      global_userLogado, global_topTitle,
      global_topAlterado,
      global_screen, 
      leasing_steps, stepHistoricoReserva, stepCompra,
      estilo_alterado,
      global_dar_lance,
      global_open_user_modal,
      global_login_moment, 
      global_top_verde, 
      foi_para,
      //seters
      
      setGlobalScreen, 
      setEstiloAlterado,
      setGlobalLoginMoment,
      setTopController,
      setGlobalDarLance
    
    
    } = useContext(meuContexto)
    
    const logado = global_userLogado.logado
    const alterado = estilo_alterado
    const title = global_topTitle
  
  
    console.log(global_screen)
    
    /////////////////////////////////////////////////
  
   
    
    //controlador de estado
  
    useEffect(
      e => {
        document.getElementById("scrolator").click()
  
        
        if(global_dar_lance)
          setEstiloAlterado(true)
        else
          setEstiloAlterado()
  
          setTopController()

          console.log(estilo_alterado)
  
  
      }, [
          global_screen, 
          leasing_steps, 
          stepHistoricoReserva, 
          stepCompra, 
          global_dar_lance,
          global_userLogado,
          foi_para
          
        ] //trata do auto scroll e do topbar estilo
    ) //Scroll para root id sempre que muda de screen
  
    
    window.onpopstate = e => { //Controla o evento de voltar do navegador
      
      const screen = window.location.pathname.split("/")[1]
  
      
      setGlobalScreen(screen) ////para controlar quando mudo estilo do top bar
      setEstiloAlterado()
      setTopController()
      setGlobalDarLance(false)
        
    }//Responsável por actualizar a informação da tela aberta, quando aperta-se bo back do navegador
  
  

  return (

    
      <BrowserRouter>

          <TopBar goToLogin = {goToLogin}/>
          <Routes />
          
      </BrowserRouter>
    
  )
}

