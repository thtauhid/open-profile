import React from 'react'

const RecentActivityCard = ({content}:{content:string}) => {
  return (
    <article className='flex w-full rounded-lg border-solid border-black border-2 p-3 my-2'>
      {content}
    </article>
  )
}

export default RecentActivityCard
