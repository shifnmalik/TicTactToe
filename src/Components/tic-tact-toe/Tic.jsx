
import React, { useEffect, useState } from 'react';


function Square({value,onClick}){
  
    return  ( 
  
    <button  onClick={onClick} 
    
    style={{
    
      border:"2px solid blue",
      backgroundColor:"black",
      float: "left",
      padding: "0px",
      height:"100px",
      width:"100px",
      cursor:"pointer",
      textAlign:"center",
      fontSize:"40px",
      marginRight:"-1px",     
      marginTop:"-1px",
      color:"blue"
 
    }}>{value}</button>
    )

}


export default function TicTacToe() {

 const [squares,setSquares] = useState(Array(9).fill(""))
 const [isXTurn, setIsXTurn] =useState(true);
const [status,setStatus] = useState("")

 console.log(squares)


 function getWinner(squares){
  const winningPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7]

  ];

  for(let i=0;i<winningPatterns.length;i++){
    const[x,y,z] =winningPatterns[i]
    if (squares[x] &&
       squares[x] === squares[y]  &&
       squares[x] === squares[z]){
      return squares[x]

    }
  }
  return null;
 }

 function handleClick(getCurrentSquare){

 let cpySquares = [...squares];
 if(getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
 cpySquares[getCurrentSquare]= isXTurn ?  'X' : 'O';
 setIsXTurn(!isXTurn);
 setSquares(cpySquares)
  
 
 }
 function handleReastart(){
  setIsXTurn(true)
  setSquares(Array(9).fill(''))
 }

 useEffect(()=>{
  if(!getWinner(squares) && squares.every((item)=> item !== '')){
    setStatus('This A Draw ! Please restart the game')
  } else if(getWinner(squares)){
    setStatus(`Winner is ${getWinner(squares)}  : Please Reastart The Game`)
  }else{
    setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`)
  }

 },[squares,isXTurn])
  return (

    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"100px"}} >
      <div className="row ">

      <Square value={squares[0]} onClick={()=> handleClick(0)}/>
      <Square value={squares[1]}  onClick={()=> handleClick(1)}/>
      <Square value={squares[2]}  onClick={()=> handleClick(2)}/>
      </div>
      <div className="row">
      <Square value={squares[3]}  onClick={()=> handleClick(3)}/>
      <Square value={squares[4]}  onClick={()=> handleClick(4)}/>
      <Square value={squares[5]}  onClick={()=> handleClick(5)}/>
      </div>
      <div className="row">
      <Square value={squares[6]}  onClick={()=> handleClick(6)}/>
      <Square value={squares[7]}  onClick={()=> handleClick(7)}/>
      <Square value={squares[8]}  onClick={()=> handleClick(8)}/>
      </div>

      <h1>{status}</h1>
      <button style={{border:"2px solid blue",width:"100px",height:"40px", backgroundColor:"black", color:"white", fontSize:"20px", fontWeight:"500",cursor:"pointer",}} 
      onClick={handleReastart}>Reastart</button>

    </div> 
    
  );
}
 
