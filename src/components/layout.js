import { aligner, main } from './layout.module.scss'

import React from "react"

const Layout = ({ children }) => {
  return (
    <main className={main}>
      <div className={aligner}>{children}</div>
    </main>
  )
}

export default Layout
