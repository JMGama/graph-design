import React from "react";
import { Node } from '../Node'
import './style.css'

export const Grid = () => {
  const grid = initGrid()
  return (
    <div className="grid">
      <table>
        <tbody>
          {grid.map((row, rowIndx) => {
            return (
              <tr key={rowIndx} id={`row-${rowIndx}`}>
                {row.map((col, colIndx) => {
                  return (
                    <Node key={colIndx} row={rowIndx} col={colIndx}></Node>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>);
};

const initGrid = () => {
  const grid = [];
  for (let row = 0; row < 25; row++) {
    const current_row = []
    for (let col = 0; col < 25; col++) {
      const current_col = [];
      current_row.push(current_col)
    }
    grid.push(current_row)
  }
  return grid

}
