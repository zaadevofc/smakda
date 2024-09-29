'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import 'animate.css';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const lenis = {
  lerp: 0.1,
  duration: 1,
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