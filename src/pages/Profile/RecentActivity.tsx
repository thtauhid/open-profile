import RecentActivityCard from '@/components/ui/RecentActivityCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const RecentActivity = () => {
  return (
    <div className='flex flex-col w-full p-2'>
       <div className="flex w-full justify-start text-[2rem] font-bold px-3 my-1">
        Recent Activity
        </div>
        <div className='flex flex-col w-full px-1'>
             <RecentActivityCard content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"}/>
             <RecentActivityCard content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"}/>
              <RecentActivityCard content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"}/>
               <RecentActivityCard content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"}/>
            <RecentActivityCard content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"}/>
        </div>
         <div className=" flex w-full justify-end px-4">
        <Button variant={"default"}>More</Button>
        </div>
    </div>
  )
}

export default RecentActivity
