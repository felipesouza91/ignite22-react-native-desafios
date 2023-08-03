import { IImageProps, Image } from 'native-base'
import React from 'react'

type IAvatarProps = IImageProps

const Avatar: React.FC<IAvatarProps> = ({ ...rest }) => {
  return <Image {...rest} />
}

export { Avatar }
