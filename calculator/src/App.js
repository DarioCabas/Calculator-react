/* eslint no-eval:0*/
import React, {useState}from 'react'
import words from 'lodash.words'
import Result from './Components/Result'
import Functions from './Components/Functions'
import Numbers from './Components/Numbers'
import MathOperations from './Components/MathOperations'
import './Components/Result'
import './App.css'






const App = () => {

    const [stack , setStack] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0";
    
    return (
        <main className='react-calculator'>
                <Result value={value} />
                <Numbers onClickNumber={ number =>  setStack(`${stack}${number}`)}/>
                <Functions 
                onContentClear={() =>setStack('')} 
                onDelete={ () => {
                    if (stack.length > 0) {
                        const newStack =stack.substring(0 , stack.length - 1)
                        setStack(newStack)
                    }
                    }} 
                />

<MathOperations 
            onClickOperation={operation => setStack(`${stack}${operation}`)} 
            onClickEqual={equal => setStack(eval(stack).toString())}
        />

        </main> )

 
}

export default App