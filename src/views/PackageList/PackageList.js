import './PackageList.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationBar, Heading, CardPackage, Footer } from '../../components'
import bgImage from '../../assets/bg-content.png'

export default class PackageList extends Component {
  static propTypes = {
    packages: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.getPackages()
  }

  render () {
    const { packages } = this.props

    return (
      <div style={{ backgroundImage: `url(${bgImage})` }}>
        <NavigationBar noLogo />
        <Heading />
        <div className='container'>
          <div className='packages-container'>
            {packages.map((package, key) => (
              <a key={key} href={`/${package.id}`} className='link-without-style'>
                <CardPackage {...package} />
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
