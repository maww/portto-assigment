import React from 'react'
import Stack, { Gutter, Direction } from '../../components/Stack'
import CommonCard from '../../components/Card'
import { Block, Line } from '../../components/Placeholder'
import Image from '../../components/Image'
import style from './Card.module.css'

interface Props {
  name: string
  image: string
}

function Card(props: Props): JSX.Element {
  const { image, name } = props
  return (
    <CommonCard>
      <Stack direction={Direction.VERTICAL} gutter={Gutter.MEDIUM}>
        <Image src={image} alt={name} />
        <h4 className={style.name}>{name}</h4>
      </Stack>
    </CommonCard>
  )
}

function Placeholder(): JSX.Element {
  return (
    <CommonCard>
      <Stack direction={Direction.VERTICAL} gutter={Gutter.MEDIUM}>
        <Block />
        <Line />
      </Stack>
    </CommonCard>
  )
}

export default Card
export { Placeholder }