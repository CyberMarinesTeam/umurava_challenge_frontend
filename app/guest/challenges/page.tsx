import ChallengeCard from '@/app/components/ChallengeCard'
import NavBar from '@/app/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <main className=''>
          <NavBar />

          <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mb-10 mt-10'>
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
          
          </div>
    </main>
  )
}

export default page
