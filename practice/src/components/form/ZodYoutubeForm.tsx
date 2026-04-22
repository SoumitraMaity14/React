import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface data {
  name: string,
  email: string,
  channel: string,
 
}

export const YoutubeForm = () => {
  const form = useForm<data>({
    defaultValues:  {
        name: "",
        email: "",
        channel: "",
      }
    })

  const { register, control, handleSubmit, formState } = form

  const { errors } = formState

  const onSubmit = (data: data) => {
    console.log("Youtube form data", data)
  }
  
  return (
    <div className="mt-10 max-w-2xl mx-auto shadow-md rounded-md px-8 py-10">
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start " noValidate>
        <div className="mt-5">
          <label htmlFor="name" >Name</label>
          <input type="text" id="name" {...register("name")} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.name?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="email">email</label>
          <input type="email" id="email" {...register("email")} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.email?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.channel?.message}</p>
        </div>
       
        <button className=" px-4 py-2 bg-white text-gray-600 border rounded">Submit</button>
       
      </form>
      <DevTool control={control} />
    </div>
  )
}
