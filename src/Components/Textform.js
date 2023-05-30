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

  const handleDownClick = () =>{
    setText(text.toLowerCase());
  }

  return (
    <>
      <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">            
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Conver to UpperCase</button>
    </div>
    <div>
      <button className="btn btn-primary" onClick={handleDownClick}>Lower</button>

    </div>
  
    </>
  )
}
