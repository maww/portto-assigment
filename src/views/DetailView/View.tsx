import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card, { Placeholder as CardPlaceholder } from './Card'
import style from './View.module.css'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar/Navbar'

interface Params {
  address: string
  token: string
}

interface Value {
  state: FetchState
  data: Data.Asset | null
}

const DEFAULT_VALUE: Value = Object.freeze({
  state: 'VOID',
  data: null
})

function View(): JSX.Element {
  const { address, token } = useParams<Params>()
  const [value, setValue] = useState<Value>(DEFAULT_VALUE)
  useEffect(() => {
    if (value.data || value.state === 'LOADING') {
      return
    }

    setValue((prev) => ({
      ...prev,
      state: 'LOADING'
    }))
    axios.get(`https://api.opensea.io/api/v1/asset/${address}/${token}/`)
      .then((res) => setValue({
        state: 'VOID',
        data: res.data
      }))
  }, [address, token, value])

  const { data } = value
  return (
    <>
      <Navbar title={data?.collection.name || 'Loading'} isBackable={true} />
      <Container className={style.view}>
        {data ? <Card data={data} /> : <CardPlaceholder />}
      </Container>
      <Container className={style.link_position}>
        <a
          className={style.link}
          href={data?.permalink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <h4>permalink</h4>
        </a>
      </Container>
    </>
  )
}

export default View
