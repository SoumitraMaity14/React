import React, { useState } from 'react'

export const InputValidation = () => {
    const [values, setValues]=useState({
        email: "",
        password: ""
    })
    const [errors, setErrors]=useState({})

    const validate=()=>{
        const newError={};
        if(!values.email.trim()){
            newError.email="Email is required"
        }
        else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)){
            newError.email="Invalid email format"
        }
        if(!values.password.trim()){
            newError.password="password is required"
        }
        else if(values.password.length<6){
            newError.password="password is required atleast 6 charcter"
        }

        setErrors(newError)
        return Object.keys(newError).length===0

       
    }
     const handaleSubmit=(e)=>{
            e.preventDefault();
            if(validate()){
                alert("Form submitted successfully")
            }
        }
  return (
    <div className='max-w-7xl mx-auto min-h-screen flex jstify-center items-center bg-gray-100'>
        <form onSubmit={handaleSubmit} className='bg-white w-[500px] space-y-4'>
            <p className='p-4 text-center text-xl'>Login</p>
            <input type="text" value={values.email} placeholder='email' onChange={(e)=> setValues({...values, email:e.target.value})}
            className={`w-full border rounded p-2 ${errors.email? 'border-red':''}`}/>
            {errors.email &&(
                <p className='text-base text-red-300'>
                    *{errors.email}
                </p>
            )}
            <input type="password" value={values.password} placeholder='password' onChange={(e)=> setValues({...values, password:e.target.value})}
            className={`w-full border rounded p-2 ${errors.password? 'border-red':''}`}/>
            {errors.password &&(
                <p className='text-base text-red-300'>
                    *{errors.password}
                </p>
            )}
    <button type='submit' className=''>Submit</button>
        </form>

    </div>
  )
}
