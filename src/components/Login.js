import React,{useState} from 'react'

function Login() {
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    function submitHandler(){
        if(email==="admin@admin.com"&pass==="123"){
            alert("success")
        }
        else{
            alert("failed")
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}>
                  </input>
        </div>
        <div>
            <label htmlFor="pass">password:</label>
            <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}>
                  </input>
        </div>
        <div>
            <button>submit</button>
        </div>
    </form>
  )
}

export default Login