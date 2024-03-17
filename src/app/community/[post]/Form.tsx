'use client'

export const Form = () => {
  return (
    <form className='w-full bg-color-icon p-4'>
      <textarea
        cols={40}
        rows={1}
        className='bg-color-icon focus:outline-none placeholder:text-white'
        placeholder='Comentar ...'
      />
    </form>
  )
}
