import React,{useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup,Badge} from 'reactstrap'
function Counter() {
    const initialState = {
        counter1:0,
        counter2:10
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case 'increment':
                return {...state, counter1: state.counter1+1}
               
            case 'decrement':
                return {...state, counter1: state.counter1-1}
             case 'increment2':
                return {...state, counter2: state.counter2+action.payload}
               
            case 'decrement2':
                return {...state, counter2: state.counter2-1}    
                    
            case 'reset':
                
                return initialState
            default:
                return state;
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    
    <div>
       
        <h1>Counter</h1>
        <ButtonGroup>
            <Button color='primary' outline>
              counter1  <Badge color='secondary'>{count.counter1}</Badge>
            </Button>
            <Button color='primary' outline>
             counter2   <Badge color='secondary'>{count.counter2}</Badge>
            </Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button color='danger' onClick={()=>dispatch({type:'increment'})}>
            Increment
        </Button>
        <Button color='primary'onClick={()=>dispatch({type:'decrement'})}>
            Decrement
        </Button>
        
        </ButtonGroup>
        <ButtonGroup>
        <Button color='danger' onClick={()=>dispatch({type:'increment2',payload:5})}>
            Increment2
        </Button>
        <Button color='primary'onClick={()=>dispatch({type:'decrement2'})}>
            Decrement2
        </Button>
        <Button color='warning'onClick={()=>dispatch({type:'reset'})}>
            Reset
        </Button>
        </ButtonGroup>
    </div>
  )
}

export default Counter