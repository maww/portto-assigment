import React from 'react'
import Stack, { Gutter, Direction } from '../../components/Stack'
import CommonCard from '../../components/Card'
import { Block, Line } from '../../components/Placeholder'
import Image from '../../components/Image'
import style from './Card.module.css'

interface Props {
  data: Data.Asset
}

function Card(props: Props): JSX.Element {
  const { data } = props
  return (
    <CommonCard>
      <Stack
        direction={Direction.VERTICAL}
        gutter={Gutter.MEDIUM}
      >
        <Image
          className={style.image}
          src={data.image_url}
          alt={data.name}
        />
        {data.name && <h2 className={style.title}>{data.name}</h2>}
        {data.description && <p>{data.description}</p>}
      </Stack>
    </CommonCard>
  )
}

function Placeholder(): JSX.Element {
  return (
    <CommonCard>
      <Stack direction={Direction.VERTICAL} gutter={Gutter.MEDIUM}>
        <Block className={style.placeholder_image} />
        <h2 className={style.title}><Line /></h2>
        <p className={style.placeholder_paragraph}>
          <Line />
          <Line />
          <Line />
        </p>
      </Stack>
    </CommonCard>
  )
}

export default Card
export { Placeholder }