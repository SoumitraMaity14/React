import { useForm } from "react-hook-form"

interface data{
    name:string,
    email:string,
    password:string
}
export const SignupForm = () => {
    const form=useForm<data>({
        defaultValues:{
            name: "",
            email:"",
            password:""
        }
    })
   const {register, handleSubmit, formState} =form

   const {errors}=formState

   const onsubmit=(data:data)=>{
    console.log("Signup data", data)
   }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col max-w-xl mx-auto space-x-2" noValidate>
        <label htmlFor="name" className="p-2">Enter Your Name</label>
        <input type="text" id="name" {...register("name")} className="p-2 border rounded-md"/>
        <p className="text-red-800">{errors.name?.message}</p>
        <label htmlFor="email" className="p-2">Enter Your Email</label>
        <input type="text" id="email" {...register("email")} className="p-2 border rounded-md"/>
        <p className="text-red-800">{errors.email?.message}</p>
        <label htmlFor="password" className="p-2">Enter Your Password</label>
        <input type="password" id="password" {...register("password")} className="p-2 border rounded-md"/>
        <p className="text-red-800">{errors.password?.message}</p>
        <button className="p-2 border rounded-md">Submit</button>
    </form>
  )
}
