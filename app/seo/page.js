import React from 'react'
import SeoSection from '@/components/seoSection/seoweb'
import NavbarWebsite from '@/components/website/NavbarWebsite'

export default function Seo() {
  return (
    <>
        <NavbarWebsite header={"Boost Your Online Visibility with Expert SEO"} description={"Our SEO services are designed to improve your search engine rankings, increase organic traffic, and drive qualified leads."} route={"seo "}/>
        <SeoSection/>
    
    </>
  )
}
