import { cn } from '@/lib/utils'
import React from 'react'

type BrandProps = {
  className?: string
  hideLogo?: boolean
}

const Brand: React.FC<BrandProps> = ({ className, hideLogo }) => {
  return (
    <>
      <div className={cn('flex items-center gap-2 text-xl', className)}>
        {!hideLogo && <img src="/logo/logo-smk.png" alt="" className="size-10" />}
        <div className={cn('overflow-hidden pl-3', !hideLogo && 'border-l border-black')}>
          <h1 className="font-extrabold font-montser animate__animated animate__slideInLeft animate__slow">
            SMKN 2 SUKOHARJO
          </h1>
        </div>
      </div>
    </>
  );
};

export default Brand