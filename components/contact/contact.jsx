import React from 'react'
import Contact from '../home/contact'

export default function ContactSection() {
  return (
        <>
        <div>
            <div className='contactsection'> 
                <h1 className=' HeadingAction font' style={{color:"#00dbde",textDecoration:"underline"}}>Contact US</h1>
            </div>
        </div>

        <div className='contentsec'>
          <h1 className='font'>Don't think too much — we develop your website within your budget.</h1>
        </div>
        <Contact/>
        
    </>
  )
}
