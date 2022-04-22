import React, { useState } from 'react'


 function PassContent() {


   const [state,setState]=useState({
       length:10,
       upper:false,
       lower:false,
       number:false,
       symbols:false
   })
   const [password, setPassword] = useState('Generate password here');
   const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "1234567890";
   const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
   const symbol="!@#$%&*."

    const handlePassword =()=>{
        let result = '';
        if(!state.upper && !state.lower && !state.number && !state.symbols){
            alert("Select any one from the following options");
         
        }
       
        if(state.upper){
          
        result= result + alphabets 
        setPassword(createPassword(result))
        
        }
        if(state.lower ){
           
                result= result + smallAlphabets 
                setPassword(createPassword(result))
        }
        if(state.number){
         
                result= result + numbers
                setPassword(createPassword(result))
                
        }
        if(state.symbols){
         
            result= result + symbol
            setPassword(createPassword(result))
            
           
    }
    if(state.length<3 || state.length>28){
        alert('Password length should be greater than 3 and less than 28')
         setPassword('')
    }
        
    }
    



    const createPassword=(result)=>{
        let temp='';
        for (let i = 0; i < state.length; i++) {
           temp+=  result[Math.floor(Math.random() * result.length)] 
    }
    return temp
}
    const GeneratePassword =()=>{
        handlePassword( )
    }

    return (
        <>
        <div className='container main-body'>
            <div className='password container'><span>{password}</span></div>
            <div className='container form-content'>
                <div className="form-check form-check1">
                    <label><h6>Password Length</h6></label>
                    <input className="form-input" type="tel" value={state.length} minLength={3} max={20} id="passLength" onChange={(e)=>{setState({...state, length: e.target.value})}}  />
                    
                </div>
                <div className="form-check">

                    <input className="form-check-input" type="checkbox" name='upper' checked={state.upper} id="flexCheck1" onChange={(e)=>{setState({...state, upper: e.target.checked})}} />
                    <label className="form-check-label" htmlFor="flexCheck1">
                        Uppercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={state.lower}  id="flexCheck2" onChange={(e)=>{setState({...state, lower: e.target.checked})}} />
                    <label className="form-check-label" htmlFor="flexCheck2">
                        Lowercase Letters
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"checked={state.number} id="flexCheck3" onChange={(e)=>{setState({...state, number: e.target.checked})}} />
                    <label className="form-check-label" htmlFor="flexCheck3">
                        Numbers
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={state.symbols} id="flexCheck4" onChange={(e)=>{setState({...state, symbols: e.target.checked})}} />
                    <label className="form-check-label" htmlFor="flexCheck4">
                        Symbols
                    </label>
                </div>

                <button className='button btn btn-danger btn-lg ' onClick={GeneratePassword}>Generate</button>

            </div>

        </div>
        </>
    )
    }
export default PassContent;
