import { cn } from '@/lib/utils'
import React from 'react'

type BrandProps = {
  className?: string
}

const Brand: React.FC<BrandProps> = ({ className }) => {
  return (
    <>
      <div className={cn('flex items-center gap-2 text-xl', className)}>
        <img src="/logo/logo-smk.png" alt="" className='size-10' />
        <div className='overflow-hidden pl-3 border-l border-black'>
          <h1 className='font-extrabold font-montser animate__animated animate__slideInLeft animate__slow'>SMKN 2 SUKOHARJO</h1>
        </div>
      </div>
    </>
  )
}

export default Brand