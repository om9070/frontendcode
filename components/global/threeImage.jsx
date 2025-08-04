import React from 'react'
import style from "./Background.module.css"

export default function ThreeImage({img1,img2,img3,title,description}) {
  return (
    <>
     <div className={style.mainSection}>
            <div className={style.upperSection}>
                <div className={style.box}>
                    <img src={img1} className={style.imagesec} alt='...' />

                </div>
                <div className={style.box}>
                    <img src={img2} className={style.imagesec} alt='...' />

                </div>
            </div>
            <div className={style.imagedown}>
                <img src={img3} className={style.imagesec} alt='...' />
            </div>
            <div className={style.lowercontent}>
            <h1 className='font color'>{title}</h1>
            <p className='font my-3'>{description}</p>
            </div>
        </div>
    </>
  )
}
