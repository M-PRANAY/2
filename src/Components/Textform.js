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
  const handleClearClick = () =>{
    setText(" ");
  }

  return (
    <>
      <div className='container' style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">            
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}></textarea>
      </div>
      <button className={`btn btn-${props.mode ==='dark'?'secondary':'primary'} `} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.mode ==='dark'?'secondary':'primary'} mx-2`} onClick={handleToLower}>Convert to ToLower</button>
      
      <button className={`btn btn-${props.mode ==='dark'?'secondary':'primary'}  `} onClick={handleClearClick}>Clear</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.length} characters and {text.split(" ").length} words</p>
    </div>
  
    </>
  )
}
          