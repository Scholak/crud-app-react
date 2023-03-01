import React from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  const { id } = useParams()
  
  return (
    <div>
      show - {id}    
    </div>
  )
}

export default Show
