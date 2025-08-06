import dynamic from 'next/dynamic';
import React, { Suspense } from 'react'
import LoadingSpinner from '../loading';
const AboutSection = dynamic(() => import('@/components/about/about'), {
  loading: () => <p>Loading...</p>,
});


export default function About() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <AboutSection />
      </Suspense>
    </>
  )
}
