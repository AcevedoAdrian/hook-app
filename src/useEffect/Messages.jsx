import { useEffect } from "react"

export const Messages = () => {
  useEffect(() => {
    console.log('Message Mounted')
  
    return () => {
      console.log('Message Unmounted')
    }
  }, [third])
  
  return (
    <>
      <h3>Usuario ya existe </h3>
    </>
  )
}
