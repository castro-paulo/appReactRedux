import './CardPackage.css'
import React, { Component } from 'react'
import moment from 'moment'
import bgPlaine from '../../assets/img-plaine.png'

export default class CardPackage extends Component {
  static defaultProps = {
    onClick: () => { }
  }

  render () {
    const { name, value, beginDate, endDate, urlImage, onClick } = this.props

    return (
      <div className='card' {...{ onClick }}>
        <img src={urlImage} alt='' />
        <div className='title'>
          <p className='source-font'>
            {name.toUpperCase()}
          </p>
          <div className='icon'>
            <div className='line' />
            <img src={bgPlaine} alt='' />
          </div>
        </div>
        <div className='content'>
          <div className='period'>
            <p>To {moment.unix(beginDate).format('DD [de] MMMM')} for {moment.unix(endDate).format('DD [de] MMMM')}</p>
          </div>
          <div className='info'>
            <div>
              {moment.duration(moment.unix(beginDate).diff(moment.unix(endDate))).humanize()}
            </div>
            <div>
              {parseInt(value, 10).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
