"use client"
import React from 'react'
import Edit from '@/components/Edit'
import { useParams } from 'next/navigation'


const Page = () => {
  const params = useParams()
  const { id } = params
  // console.log(id,typeof(id))
  return (
    <>

      <Edit id={id} />
    </>
  )
}

export default Page
