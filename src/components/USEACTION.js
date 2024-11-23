import React, { useActionState } from 'react'
import { loginUser } from '../utils/loginUser';
import { SubmitButton } from './SubmitButton';

// export const USEACTION = () => {
//     const [data, setData] = useState()
//     const [error, setError] = useState()
//     const [isPending , setIsPending] = useState()
//     async function handleSubmit(formData) {
//         const username = formData.get('username');
//         const password = formData.get('password')
//         console.log(username, password)
//         try {
//             const response = await loginUser(username, password)
//             console.log(response)
//             setData(response.data)
//         } catch (error) {
//             setError(error.error)
//         }
//     }
//     return (
//         <div className='flex flex-col'>
//             <form className=' flex flex-col gap-2' action={handleSubmit}>
//                 <input name='username' className='border-2 border-black rounded-lg' type='username' />
//                 <input name='password' className='border-2 border-black rounded-lg' type='password' />
//                 <button className='rounded-lg bg-green-500 ' type='submit'>Submit</button>
//             </form>
//             {error && <h1>{error}</h1>}
//             {data && <h1>logged in as {data.username}</h1>}
//         </div>
//     )
// }

export const USEACTION = () => {

    
//handles  data , error , isPending
    const [user, submitAction, isPending] = useActionState(login,{
        data: null,
        error: null
    })

    async function login(prevState , formData) {
        console.log(prevState)
        const username = formData.get('username');
        const password = formData.get('password')
        try {
            const response = await loginUser(username, password)
            console.log(response)
            return response;
            // return {data : response.data , error : null }
        } catch (error) {
            console.log(error)
            return { data : null , error : error.error}
        }
    }

   console.log(isPending)
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <form className="flex flex-col gap-3 w-full max-w-sm bg-white p-6 rounded-lg shadow-md" action={submitAction}>
          {/* Username Input */}
          <input
            name="username"
            className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="text"
            placeholder="Username"
          />
      
          {/* Password Input */}
          <input
            name="password"
            className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="password"
            placeholder="Password"
          />
      
          {/* Submit Button */}
          {/* <button
            className="rounded-lg bg-green-500 text-white p-2 hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-400 disabled:bg-gray-300"
            type="submit"
            disabled={isPending}
          >
            {isPending ? 'Submitting...' : 'Submit'}
          </button> */}
          <SubmitButton/>
        </form>
      
        {/* Error or Success Messages */}
        {user?.error && <h1 className="text-red-600 mt-4">{user.error}</h1>}
        {user?.success && <h1 className="text-green-600 mt-4">Logged in as {user.data.username}</h1>}
      </div>
      
    )
}