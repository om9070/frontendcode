import React from 'react'

export default function LeadSection({title,route}) {
  return (
    <>
    <div>
        <div className='digitalsection'> 
            <h1 className=' HeadingAction font' style={{color:"#e7d107ff"}}>{title}</h1>
            <p style={{color:"aqua",fontWeight:"bold",fontSize:"20px",backgroundColor:"black",borderRadius:"8px",padding:"0px 5px"}} className='font'>digital/{route}</p>
        </div>
    </div>
    </>
  )
}
