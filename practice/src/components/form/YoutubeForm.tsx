import { useForm,useFieldArray,  type FieldErrors } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect } from "react"

let formCount = 0
interface data {
  name: string,
  email: string,
  channel: string,
  social: {
    facebook: string,
    twitter: string
  },
  phoneNumber:string[],
  phNumber:{
    number: string
  }[],
  age: number,
  dob: Date
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
        phoneNumber:["", ""],
        phNumber:[{
          number:""
        }],
        age: 0,
        dob:new Date()
      }
    }
  })
  const { register, control, handleSubmit, formState,watch,getValues, setValue,reset  } = form
 


  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful,submitCount } = formState
    console.log({touchedFields, dirtyFields, isDirty, isSubmitting, isSubmitted, isSubmitSuccessful,submitCount})
  // const watchedUserName=watch()

  useEffect(()=>{
    const subscription=watch((value)=>{
      console.log(value)
    })
    return()=> subscription.unsubscribe()
  }, [watch])

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  const handaleGetValues=()=>{
    console.log("Get Values", getValues(["name", "social"]))
  }
  const handalSetvalues=()=>{
    setValue("name","",
      {shouldDirty:true,
        shouldTouch:true,
        shouldValidate:true
      }
    )
  }

  const {fields, append, remove}=useFieldArray({
    name: 'phNumber', 
    control
  })
  
  const onSubmit = (data: data) => {
    console.log("Youtube form data", data)
  }

  const onError=(error:FieldErrors<data>)=>{
    console.log("form error", error)
  }
  formCount++
  return (
    <div className="mt-10 max-w-2xl mx-auto shadow-md rounded-md px-8 py-10">
      <p className="pb-10 text-center pt-10">YoutubeForm ({formCount / 2}) </p>
      {/* <p>watched Values: {JSON.stringify(watchedUserName)}</p> */}
      <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-3 items-start " noValidate>
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
              // disabled:true,
              // disabled: watch("channel")==="",
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
        <div className="mt-5 ">
          <label htmlFor="phNumber">secondary phone number</label>
          <div className="">
            {
              fields.map((field, index)=>(
                <div key={field.id} className="flex gap-3">
                  <input className="w-full p-2 border border-gray-200 rounded-md" type="text" id="phNumber" {...register(`phNumber.${index}.number` as const)}/>
                  {index > 0 &&(
                    <button className="px-4 py-2 bg-white text-gray-600 border rounded" onClick={()=>remove(index)}>Remove</button>
                  )}
                  </div>
              ))
            }
             <button className="mt-4 px-4 py-2 bg-white text-gray-600 border rounded" onClick={()=>append({number:""})}>Add</button>
          </div>
          
          </div>
           <div className="mt-5">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age",
            {valueAsNumber:true,
              required: {
                value: true,
                message: "age is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.age?.message}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" {...register("dob",
            { valueAsDate:true,
              required: {
                value: true,
                message: "date is required"
              }
            }
          )} className="w-full p-2 border border-gray-200 rounded-md" />
          <p className="text-red-800 mt-2">{errors.dob?.message}</p>
        </div>
        <button 
        disabled={!isDirty||!isValid || isSubmitSuccessful}
        className=" px-4 py-2 bg-white text-gray-600 border rounded">Submit</button>
        <button 
        onClick={handaleGetValues}
        className=" px-4 py-2 bg-white text-gray-600 border rounded">Get values</button>
        <button 
        onClick={handalSetvalues}
        className=" px-4 py-2 bg-white text-gray-600 border rounded">Set values</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
