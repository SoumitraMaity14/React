import { useForm } from "react-hook-form"


export const YoutubeForm = () => {
  const form=useForm()
  const {register}=form
  return (
    <div className="mt-10 max-w-2xl mx-auto shadow-md rounded-md px-8 py-10">
      <p className="pb-10 text-center pt-10">YoutubeForm</p>
      <form className="flex flex-col gap-3 items-start ">
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" {...register("name")} className="w-full p-2 border border-gray-200 rounded-md"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} className="w-full p-2 border border-gray-200 rounded-md"/>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} className="w-full p-2 border border-gray-200 rounded-md"/>
        <button className="px-4 py-2 bg-white text-gray-600 border rounded">Submit</button>
      </form>
      
      </div>
  )
}
