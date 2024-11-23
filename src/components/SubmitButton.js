//without using prop-drilling , or use context


import { useFormStatus } from 'react-dom'
export const SubmitButton =  () => {
    console.log(useFormStatus)
    const { pending } = useFormStatus();
    return(
        <button
        className="rounded-lg bg-green-500 text-white p-2 hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-400 disabled:bg-gray-300"
        type="submit"
        disabled={pending}
      > 
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    )
}