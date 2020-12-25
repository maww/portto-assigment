import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useDerivedRef from '../../hooks/useDerivedRef'
import Stack, { Gutter as StackGutter, Direction as StackDirection } from '../../components/Stack'
import Flow, { Gutter as FlowGutter } from '../../components/Flow'
import Context, { useContextState, LIMIT } from './Context'
import Card, { Placeholder as CardPlaceholder } from './Card'
import style from './View.module.css'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar/Navbar'

function View(): JSX.Element {
  const [value, updateValue] = useContextState()
  const { state, list, isEnd } = value

  const valueRef = useDerivedRef(value)
  const loadingRef = useRef(null)
  useEffect(() => {
    const el = loadingRef.current!
    const observer = new IntersectionObserver(([entry]) => {
      const v = valueRef.current
      if (entry.intersectionRatio && v.state === 'VOID' && !v.isEnd) {
        updateValue()
      }
    })

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [valueRef, updateValue])

  return (
    <Context.Provider value={value}>
      <Navbar title="List" />
      <Container>
        <Stack
          className={style.view}
          direction={StackDirection.VERTICAL}
          gutter={StackGutter.LARGE}
        >
          <Flow gutter={FlowGutter.LARGE} col={2}>
            {
              state === 'LOADING' && !list.length
                ? new Array(LIMIT).fill(null).map((_, index) => <CardPlaceholder key={index} />)
                : list.map((item) =>
                  <Link
                    key={item.permalink}
                    className={style.link}
                    to={`/detail/${item.asset_contract.address}/${item.token_id}`}
                  >
                    <Card
                      image={item.image_url}
                      name={item.name}
                    />
                  </Link>
                )
            }
          </Flow>
          <div ref={loadingRef} className={style.loading}>{isEnd ? 'End' : 'Loading'}</div>
        </Stack>
      </Container>
    </Context.Provider>
  )
}

// new IntersectionObserver()

export default View