import React from 'react'
import imgVillage from '../img/village.jpg';

function Background() {
    return (
        <div className="h-full w-full top-0 left-0 fixed bg-cover rounded-lg opacity-75" style={{ backgroundImage: `url(${imgVillage})` }}>
        </div>
    )
}

export default Background
