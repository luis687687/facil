import { Stack, Typography } from '@mui/material'
import React from 'react'
import fonts from '../../../settings/fonts'

export default props => {
  return (
   <Stack sx = {{
    mt: "75px",
    fontSize: "16px"
   }}>
    <Typography sx = {{
        mb: "70px"
    }}>
        Nosso objetivo é acabar com a complexidade e por isso tentamos deixar essa Política de Privacidade ("Política de Privacidade") o mais simples possível – mas, caso ainda tenha dúvidas, nossos canais de atendimento indicados abaixo estão à sua disposição.
        <br /><br />A Política de Privacidade da Nu Pagamentos S.A., Nu Financeira S.A. - Sociedade de Crédito, Financiamento e Investimento e demais empresas do grupo, que abrange suas controladoras e controladas, direta ou indiretamente, assim como suas coligadas e sociedades sob controle comum no Brasil ("Nubank") foi criada para mostrar o nosso compromisso em sempre tratar os seus dados pessoais com segurança, privacidade e transparência. 
        <br /><br />Esta Política de Privacidade descreve os dados pessoais que coletamos, como eles são usados, armazenados e compartilhados e os seus direitos em relação a esses dados. Recomendamos a leitura atenta.
    </Typography>
    <Typography sx = {{
        fontSize: "20px",
        colr: "#000",
        fontFamily: fonts.bold+" !important",
        mb: "37px"
    }}>
        Introdução
    </Typography>

    <Typography>
    Quando você contrata os serviços do Nubank, você nos fornece os seus dados pessoais para que possamos viabilizar a contratação de nossos produtos e serviços e também para te entregar a melhor experiência possível. No Nubank, privacidade, segurança e transparência são valores fundamentais e sempre adotaremos as melhores práticas para garantir a confidencialidade e integridade dos seus dados pessoais.
     
     
    <br/><br/>Além disso, burocracia, letras miúdas e asteriscos não fazem parte da nossa missão no Nubank. 
      Por isso, desenvolvemos essa Política de Privacidade para explicar, de uma forma clara, simples e objetiva, as nossas práticas, como os seus dados pessoais são tratados e por que pedimos eles. 
      
      <br/><br/>Ao aceitar os termos dessa Política de Privacidade, você está ciente de que a controladora dos seus dados pessoais, ou seja, a empresa responsável por tomar as decisões sobre o tratamento dos seus dados pessoais, será a Nu Pagamentos S.A., inscrita no CNPJ sob nº 18.236.120/0001-58, com sede na Cidade de São Paulo, Estado de São Paulo, na Rua Capote Valente, nº 39, Pinheiros, CEP 05409-000. 
      
      
      <br/><br/>Dependendo dos serviços contratados, a controladora dos seus dados poderá ser a empresa Nu Financeira S.A. - Sociedade de Crédito, Financiamento e Investimento, inscrita no CNPJ sob o nº 30.680.829/0001-43 com sede na Cidade de São Paulo, Estado de São Paulo, na Rua Capote Valente, nº 120, Pinheiros, CEP 05409-000. Essa é a empresa do Nubank responsável, por exemplo, pela concessão de crédito, e que oferece alguns de nossos produtos, como os empréstimos pessoais. 
      
      <br/><br/>Após a leitura desta Política de Privacidade, se você tiver dúvidas, reclamações, quiser exercer seus direitos relacionados aos seus dados pessoais ou se comunicar com o Nubank sobre esse assunto, você pode entrar em contato conosco pelos nossos canais de atendimento ou contatar o nosso encarregado (DPO) pelo e-mail dpo@nubank.com.br.
    </Typography>
   </Stack>
  )
}
