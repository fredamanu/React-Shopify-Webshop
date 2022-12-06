import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const MarqueeText = dynamic(async () => {
  return (await import('./MarqueeText')).default
})

Builder.registerComponent(MarqueeText, {
  name: 'MarqueText',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
  ],
})
