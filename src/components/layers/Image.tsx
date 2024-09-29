/** @format */

import ImageProvider, { ImageProps } from 'next/image';
import React from 'react';

const Image: React.FC<ImageProps> = props => {
  return <ImageProvider width={500} height={500} {...props} alt={'SMK Negeri 2 Sukoharjo'} />;
};

export default Image;
