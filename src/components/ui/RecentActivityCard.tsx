import React from 'react'

const RecentActivityCard = ({content}:{content:string}) => {
  return (
    <article className='flex w-full rounded-lg border-solid border-black border-2 py-3 px-2 mb-7 mt-4 text-gray-500 h-[12.6rem]'>
      {content}
    </article>
  )
}

export default RecentActivityCard
