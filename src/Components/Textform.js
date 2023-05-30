import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText] = useState('Enter text here');
  
  const handleUpClick = () =>{
    console.log("uppercase button clicked");
    setText(text.toUpperCase());

  }

  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  }

  const handleToLower = () =>{
    setText(text.toLowerCase());
  }

  return (
    <>
      <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">            
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>Conver to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleToLower}>ToLower</button>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{text.length} characters and {text.split(" ").length} words</p>
    </div>
  
    </>
  )
}
