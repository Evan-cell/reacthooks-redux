import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <img src={props.image} alt="avatar" style={{ width :'100%' }} />
        <div className="container">
          <h4><b>{props.name}</b></h4>
          <p>{props.title}</p>
          <input type="text" onChange={props.onChangeName} value={props.name} />
          <button className="button" onClick={props.onDelete}>Delete</button>
          <div>{props.children}</div>
        </div>
      </div>
  )
}

export default Card