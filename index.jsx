import React from "react"
import ReactDOM  from "react-dom/client"
import Application from "./Application"
import "./index.css"
import Context from "./Context"

const application = ReactDOM.createRoot(document.getElementById("root"))

application.render(
    <Context>
        <Application />
    </Context>
)