import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

import Picture from './Picture'
import "../styles/Customize.css"

import robot from "../img/2.jpg"


const PictureList = [
    {
        id: 1,
        url:"https://static.vecteezy.com/system/resources/thumbnails/001/777/858/small/eye-of-the-robot-futuristic-hud-interface-illustration-vector.jpg"
    },
    {
        id: 2,
        url:"https://c8.alamy.com/comp/PXCRPB/very-detailed-futuristic-robot-eyes-closeup-view-3d-render-PXCRPB.jpg"
    },
    {
        id: 3,
        url:"https://media.npr.org/assets/img/2010/08/02/eyes_wide-ee2ce8a648f593039426ea969b842a3de9dee287-s1400-c100.jpg"
    }
]

function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    }
  return (
    <>
        <div className='Pictures'> 
            {PictureList.map((picture) => {
                return <Picture url={picture.url} id={picture.id}/>;
            })} 
        </div>

        <div className='Board' ref={drop} style={{ backgroundImage: `url(${robot})` }}> 
            {board.map((picture) => {
                return <Picture url={picture.url} id={picture.id}/>
            })}
        </div>
    
    </>
  )
}

export default DragDrop
//<img className="BoardImg" src="../img/2.jpg"></img>