import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let formCount = 0
interface data {
  name: string,
  email: string,
  channel: string,
  social: {
    facebook: string,
    twitter: string
  },
  phoneNumber:string[]
}

export const YoutubeForm = () => {
  const form = useForm<data>({
    defaultValues: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
      const data = await response.json()
      return {
        name: "Batman",
        email: data.email,
        channel: "",
        social: {
          facebook: "maitySoumitra",
          twitter: "soumitra_maity"
        },
        phoneNumber:["", ""]
      }
    }
  })
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  const onSubmit = (data: data) => {
    console.log("Youtube form data", data)
  }
  formCount++
  return (
    <div className="mt-10 max-w-2xl mx-auto shadow-md rounded-md px-8 py-10">
      <p className="pb-10 text-center pt-10">YoutubeForm ({formCount / 2}) </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start " noValidate>
        <div className="mt-5">
          <label htmlFor="name" >Name</label>
          <input type="text" id="name" {...register("name",
            {
              required: {
                value: true,
                message: "Username is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.name?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="email">email</label>
          <input type="email" id="email" {...register("email",
            {
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid Email format"

              },
              required: {
                value: true,
                message: "Email is required"
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" || "Enter a different email address"
                  )
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") || "This Domain is not supported"
                  )
                }
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.email?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel",
            {
              required: {
                value: true,
                message: "Channel is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.channel?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="facebook">facebook</label>
          <input type="text" id="facebook" {...register("social.facebook",
            {
              required: {
                value: true,
                message: "facebook is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.social?.facebook?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="twitter">twitter</label>
          <input type="text" id="twitter" {...register("social.twitter",
            {
              required: {
                value: true,
                message: "twitter is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.social?.twitter?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="primaryPhoneNumber">primary phone number</label>
          <input type="text" id="primaryPhoneNumber" {...register("phoneNumber.0",
            {
              required: {
                value: true,
                message: "primary number is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.phoneNumber?.[0]?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="secondaryNumber">secondary phone number</label>
          <input type="text" id="secondaryNumber" {...register("phoneNumber.1",
            {
              required: {
                value: true,
                message: "secondary number is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.phoneNumber?.[1]?.message}</p>
        </div>
        <button className="px-4 py-2 bg-white text-gray-600 border rounded">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
