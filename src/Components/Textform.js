import React from 'react'

export default function Textform(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">            
        <textarea className="form-control" id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary">Conver to UpperCase</button>
    </div>
  )
}
