import React from 'react'
import Image from "next/image"

export default function ImageCard() {
    return (
        <div className='my-6' style={{height:"100vh"}}>
            <div className='imageCard'>

                <img src="/digital/digital8.jpg" className='backgourndImage' alt='digital8' />
            </div>
            <div className='containercard'>
                <div className='me-4 pb-3 leftCard'>
                    <h1 className='font my-2' style={{  color: "#00dbde"}}>Data-Driven Lead Generation Services That Deliver Real Business Growth</h1>
                    <p className='font' >
                        We go beyond just driving traffic — we engineer conversion-focused strategies that bring in qualified leads. From ad creation to analytics, we manage every step of your lead generation funnel with precision. Whether you’re looking to scale through paid media or organic reach, our strategies are built to convert interest into action.
                    </p>
                </div>
                <div>
                    <img
                        src="/digital/digital7.jpg"
                        alt="Image 2"
                        width={400}
                        height={440}
                        style={{borderRadius:"8px"}}
                        className='imagesec'
                    />
                </div>
                <div className='ms-3 RigthCard'>
                    {/* <ul className='font'>
                        <li>Email nurturing sequences using Mailchimp, ActiveCampaign, etc.</li>
                        <li>Full customer journey mapping</li>
                        <li>UTM tracking for detailed source attribution</li>
                        <li>Campaign performance analysis & optimization</li>
                    </ul>
                    <button>lets go</button> */}
                </div>
            </div>
        </div>
    )
}
