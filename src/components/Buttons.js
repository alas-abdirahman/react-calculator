import React, { useState } from 'react'
import './calc.css'


const Buttons = (props) => {
  let [input, setInput] = useState('0')
  let [font_size, setFontSize] = useState('40px')
  const myStyle = {
    fontSize: font_size
  }
  const operators = {"+":'operator1',"-": "opearator2", "*":"opearator3","/": "opearator4"}
  var value = ''
  const handleClick = (event) => {
    value = event.target.value
    if(value === "C" ){
      if(input == '0')
      {
        setInput("Maxa Tire Meesha Waxpa Kuma Yalan !")
        setFontSize("18px")
      }
      else{
      setInput('0')
      setFontSize('40px')
      }
    }
    else if(value[0] === "J")
    {
      setInput(value)
    }
    else if(value === "Del")
    {
      try{
        if(parseInt(input[0]) > 0)
        {
          var str = input.substring(0, (input.length)-1)
          setInput(str)
        }
        else{
          setInput('0')
        }
      }
      catch{
        setInput('0')
      }
    }
    else if(value === '=')
    {
      try{
        if(input == '0')
        {
          setInput('War Data Soogeli Horta !')
          setFontSize('25px')
        }
        else{
          var res = eval(input)
          setInput(res)
        }
      }
      catch{
        setInput("Nio Data Saxan Soogeli")
        setFontSize("32px")
      }
    }
    else if(input[(input.length)-1] in operators && value in operators)
    {
      setInput("Mohamed Abdirahman Ma Ogola !")
      setFontSize("20px")
    }
    else{
      if(input === '0')
      {
          setInput(value)
      }
      else if(input[0] === "J")
      {
        setInput(value)
      }
      else{
      setInput(input+value)}
    }
  }
  return (
    <div>
      <input type="text" value = {input} id="input" readOnly style={myStyle}/>
    <div id="buttons-container">
      <button id="1" onClick={handleClick} value={'1'}>1</button>
      <button id="2" onClick={handleClick} value={'2'}>2</button> 
      <button id="3" onClick={handleClick} value={'3'}>3</button>
      <button id="+" onClick={handleClick} value={'+'}>+</button> 
      <button id="4" onClick={handleClick} value={'4'}>4</button> 
      <button id="5" onClick={handleClick} value={'5'}>5</button>
      <button id="6" onClick={handleClick} value={'6'}>6</button>
      <button id="-" onClick={handleClick} value={'-'}>-</button>
      <button id="7" onClick={handleClick} value={'7'}>7</button>
      <button id="8" onClick={handleClick} value={'8'}>8</button>
      <button id="9" onClick={handleClick} value={'9'}>9</button>  
      <button id="*" onClick={handleClick} value={'*'}>*</button>
      <button id="C" onClick={handleClick} value={'C'}>C</button>
      <button id="0" onClick={handleClick} value={'0'}>0</button>
      <button id="." onClick={handleClick} value={'.'}>.</button>
      <button id="/" onClick={handleClick} value={'/'}>/</button>
    </div>
    <div id='equalExit'>
      <button id="exit" onClick={handleClick} value={'Del'}>Del</button>
      <button id="equal" onClick={handleClick} value={'='}>=</button>
    </div>
    <button id="me" onClick={handleClick} value={'Jamhuuriya-CA195'}>
          JAMHURIYA-CA195</button>
      <div id='p'>&copy; Mohamed Abdirahman Abdullahi</div>
    </div>
  )
}

export default Buttons
