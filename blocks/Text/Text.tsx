import React from 'react'

interface IProps {
  headline: string
  description: string
}

const Text = ({ headline, description }: IProps) => {
  return (
    <div>
      <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>{headline}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default Text
