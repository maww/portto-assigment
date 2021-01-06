import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Container from '../Container'
import Stack, { Gutter } from '../Stack'
import style from './Navbar.module.css'

interface Props {
  title: string

  isBackable?: boolean
}

function Navbar(props: Props): JSX.Element {
  const { title } = props
  const history = useHistory()

  let { isBackable } = props
  if (isBackable) {
    isBackable = !!history.length
  }

  return (
    <div className={style.main}>
      <Container>
        <Stack gutter={Gutter.MEDIUM}>
          {isBackable && (
            <button
              className={style.button}
              onClick={() => {history.goBack()}}
            >
              🔙
            </button>
          )}
          <h2 className={style.title}>{title}</h2>
          {isBackable && <span className={style.emtyp}>🔙</span>}
        </Stack>
      </Container>
    </div>
  )
}

export default Navbar