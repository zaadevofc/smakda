'use client'

import React from 'react'
import { ReactLenis } from "@studio-freight/react-lenis";
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css';

const lenis = {
  lerp: 0.1,
  duration: 1.5,
  smoothTouch: false,
  infinite: false,
};

type ProvidersWrapperProps = {
  children: React.ReactNode
}

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => {
  return (
    <>
      <ReactLenis root options={lenis}>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </ReactLenis>
    </>
  )
}

export default ProvidersWrapper