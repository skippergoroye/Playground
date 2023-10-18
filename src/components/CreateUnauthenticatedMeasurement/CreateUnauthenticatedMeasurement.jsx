import React from 'react'
import { useParams } from 'react-router-dom'


const CreateUnauthenticatedMeasurement = () => {
  const params = useParams()


  const tailorId = params.tailorId
  console.log(params)



  return (
    <div className='text-center mt-10'>
      <h1 className='text-3xl text-red-500'>Create Measurement for UnAuthenticated User Here</h1>
    </div>
  )
}

export default CreateUnauthenticatedMeasurement
