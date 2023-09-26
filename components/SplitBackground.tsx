import React, { ReactNode } from 'react'

const SplitBackground   = ({children}:{children:ReactNode}) => {
  return (
    <>
    <div className="h-72 bg-blue-bg absolute sm:fixed w-screen sm:w-1/4 -z-20 sm:opacity-0 opacity-100 transition-opacity" />
    <div className="sm:h-screen h-72 bg-blue-bg sm:fixed absolute w-screen md:-skew-x-6 sm:w-1/2  sm:-skew-x-3 sm:-translate-x-12 -z-10 transition-all" />
    {children}
    </>

  )
}

export default SplitBackground