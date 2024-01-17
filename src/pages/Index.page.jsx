import React from 'react'
import '../styles/components/modules/index.scss'

const Index = () => {
  return (
    <header className="header1">
      <div className="container">
        <h1>Шукаєте помешкання? Підберем під вас помешкання вашої мрії</h1>
        <div className="button-wrapper">
          <button className="btn"><a href="/reg">Почати</a></button>
          <button className="btn"><a href="/login">Вхід</a></button>
        </div>
      </div>
    </header>
  )
}

export default Index