import React from 'react'
import './style.css'

export const Node = ({ row, col }) => {
    return (
        <td className="node" id={`${row}-${col}`}></td>
    )
}