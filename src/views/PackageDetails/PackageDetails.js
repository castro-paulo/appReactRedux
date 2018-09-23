import './PackageDetails.css'
import React, { Component } from 'react'
import moment from 'moment'
import { NavigationBar, Footer } from '../../components'
import bgImage from '../../assets/bg-content.png'

export default class PackageDetails extends Component {
  componentDidMount () {
    const { match: { params: { PackageId } } } = this.props

    this.props.getPackageById(PackageId)
  }

  render () {
    const { Package } = this.props

    if (!Package) {
      return (
        <p>Loading page</p>
      )
    }

    const { description, urlImage, site, phone, name, beginDate, endDate } = Package

    return (
      <div className='detalhes' style={{ backgroundImage: `url(${bgImage})` }}>
        <NavigationBar />
        <img alt='' src={urlImagem} />
        <div className='content'>
          <div className='title'>
            <h2 className='source-font' style={{ fontWeight: 'bold' }}>
              {name}
            </h2>
          </div>
          <div className='container'>
            <p className='nunito-font'>{description}</p>
            <p className='nunito-font'>
              From {moment.unix(beginDate).format('YY [de] MMMM')} to {moment.unix(EndDate).format('YY [de] MMMM')}
            </p>
            <a className='nunito-font' target='_blank' href={site}>See site</a>
            <p className='nunito-font'>
              Phone: {phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
