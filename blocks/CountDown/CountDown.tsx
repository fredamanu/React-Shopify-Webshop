import React from 'react'
import CD from 'react-countdown'

interface IProps {
  time: number
  title: string
  textOnCompletion: string
}

const Completionist = ({ text }: { text: string }) => <span>{text}</span>

const CountDown = ({ time, title, textOnCompletion }: IProps) => {
  return (
    <div>
      <p>{title}</p>
      <CD date={Date.now() + time}>
        <Completionist text={textOnCompletion} />
      </CD>
    </div>
  )
}

export default CountDown
