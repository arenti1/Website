import React from "react"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend"
import DragDrop from "../components/DragDrop"
import CustomizeBackground from "../img/CustomizeBackground.jpg"

function Customize() {
    return (
        <div className="home" style={{ backgroundImage: `url(${CustomizeBackground})` }}>

            <DndProvider  backend={HTML5Backend}>
                <div className="customize"></div>

                <DragDrop />

            </DndProvider>

        </div>
    )
}

export default Customize