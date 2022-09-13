import React from 'react'

const Intersection = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <>
    <h1 className="header"><p>{!isVisible ?"not in view" : "in view" }</p></h1>
    
    </>
  )
}

export default Intersection