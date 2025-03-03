import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const check = (array: any) => {
    const isTrue = false
    const container = document.querySelector('.container')
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
     ];
     for(let i=0; i<8; i++){
      let winCondition = win[i]
      let a = array[winCondition[0]]
      let b = array[winCondition[1]]
      let c = array[winCondition[2]]
     
     }
    
  }
  return (
    <>
    <div className='container'>

    </div>
    </>
  )
}

export default App
