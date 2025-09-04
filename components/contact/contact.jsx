import LoadingSpinner from '@/app/loading';
import dynamic from 'next/dynamic';
import React from 'react'
// import Contact from '../home/contact'
// import Email from '../home/email'

const Contact = dynamic(() => import("../home/contact"), {
  loading: () => <p><LoadingSpinner /></p>,
});

const Email = dynamic(() => import("../home/email"), {
  loading: () => <p><LoadingSpinner /></p>,
});

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
        <Email/>
        
    </>
  )
}
