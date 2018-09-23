import './Heading.css'
import React, { Component } from 'react'
import logoGo from '../../assets/logoGo.svg'
import bgHeader from '../../assets/bg-header.png'

export default class Heading extends Component {
  render () {
    return (
      <div className='heading' style={{ backgroundImage: `url(${bgHeader})` }}>
        <img className='logo' width={320} src={logoGo} alt='' />
        <div className='blue-background' />
      </div>
    )
  }
}
