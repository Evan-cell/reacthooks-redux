import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { NameContext } from '../App'
import { ColorContext } from '../App'
const ComponentB = () => {
  const color = useContext(ColorContext)
  const name = useContext(NameContext)
  return (
    <div>ComponentB
      <div>name: {name}, color: {color}</div>
    <ComponentC />
    

    </div>
  )
}

export default ComponentB