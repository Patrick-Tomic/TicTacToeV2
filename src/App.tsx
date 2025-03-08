import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import './App.css'
let gameArray = [0,1,2,3,4,5,6,7,8]
const winner:any = (() => {
  const check: any = (array: any) => {
    const isTrue = false
    const container: any = document.querySelector('.container')
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
      if(a===''|| b ===''|| c===''){
        continue;
      }else if(a==b && b==c){
        let p = document.createElement('h3')
        p.textContent='Player ' + array[winCondition[0]]+ 'is the Winner'
        const endPoint = document.createElement('form')
        endPoint.setAttribute('style',"display:flex;flex-direction:column;align-items:center; justify-content:center; position:absolute; width:33vw;  height:50vh; border: 1px solid black; background-color:#318CE7;");
        const resetButton = document.createElement('button')
        resetButton.setAttribute('type','submit')
        resetButton.addEventListener('click',()=>{
            
          gameArray = [0,1,2,3,4,5,6,7,8];
        });
        resetButton.textContent = 'restart';
        endPoint.appendChild(p);
        endPoint.appendChild(resetButton);
       container.append(endPoint);
      }
     }
     return {check};
  }
    
  })()
 
 
   /* const build: any = (array: any) => {
    
    let count = 0
   
    count++
    const container = document.querySelector('.container')
    for(let i =0; i<array.length; i++){
      const cell = document.createElement('div')
       cell.addEventListener('click',() => {
      if(array[i] = 'X' || array[i] =='O'){
      
      }else{ 
        if(count%2 === 0){
          array.splice(i,1,'X')
          winner.check(gameArray)
          cell.innerHTML = array[i]
        }else{
          array.splice(i,1,'O')
          winner.check(gameArray)
          cell.innerHTML = array[i]
        }
        cell.innerHTML = array[i]
        container?.appendChild(cell)
    }
  } 
 
  */
function App() {

  useEffect(() => {
    const cell: any = document.querySelectorAll('#cell')
    cell.forEach((cell: any) => {
      cell.addEventListener('mouseover',() => {
        cell.style.background = 'grey'
      })
      cell.addEventListener('mouseleave',() => {
        cell.style.background = 'white;'})
        
        
      cell.setAttribute('style','width:10vw; height:15vh;display:flex; justify-content:center; align-items:center; border:1px solid black; background-color:white; border-radius:25px;');
    });
    
  })
  const board = gameArray.map((value:any) => {
    return(
      <div id='cell'>
        {value}
      </div>
    )
  })
 
  
  return (
    <>
    <div className='container'>
     {board}
    </div>
    </>
  )
}

export default App
