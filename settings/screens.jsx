import { CarrosParaReservar, Leilao, Reservar, Home, Account, Informativo, Login } from '../Screen'
import MinhasReservas from '../Screen/MinhasReservas'
export const screens = [

    {
        path: "",
        element: <Home />,
        menu: true,
        title: "Início"
    },

    {
        path: "carros_para_reservar",
        element: <CarrosParaReservar />,
        menu: true,
        title: "Comprar"
    },

    // {
    //     path: "venda",
    //     //element: <Home />,
    //     menu: true,
    //     title: "Venda sua Viatura"
    // },

    {
        path: "leilao",
        element: <Leilao />,
        menu: true,
        title: "Leião"
    },

    {
        path: "politicas",
        element: <Informativo />,
        //element: <Home />,
        menu: true,
        title: "Políticas"
    },

    {
        path: "servicos",
        //element: <Home />,
        element: <Informativo />,
        menu: true,
        title: "Serviços"
    },

    {
        path: "sobre",
        //element: <Home />,
        element: <Informativo />,
        menu: true,
        title: "Sobre nós"
    },

    {
        path: "reservar",
        element: <Reservar />,
        menu: false,
        title: "Reserva"
    },

    {
        path: "minhas_reservas",
        element: <MinhasReservas />,
        menu: false,
        title: "Minhas Reservas"
    },
    {
        path: "login",
        element: <Login />,
        menu: false,
        title: "Iniciar Sessão"
    }, 
    {
        path: "account",
        element: <Account />,
        menu: false,
        title: "Conta de usuário"
    },

]