import React from 'react'
import Marquee from 'react-text-marquee'

interface IProps {
  title: string
}

const MarqueeText = ({ title }: IProps) => {
  return (
    <div>
      <Marquee text={title} loop />
    </div>
  )
}

export default MarqueeText
