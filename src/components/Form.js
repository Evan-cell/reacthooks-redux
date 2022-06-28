import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const submitForm = (e) => {
        e.preventDefault();
        alert(`My name is ${name} and email is ${email}`)
        setEmail('')
        setName('')
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <div><label >Name</label>
            <input 
            value={name}
            onChange={e => setEmail(e.target.value)}
            type="text" />
            </div>
            <div><label >Email</label>
            <input
            value={name}
            onChange={e => setEmail(e.target.value)}
            type="text" />
            </div>
            <button color='danger'>Submit</button>
        </form>
    </div>
  )
}

export default Form