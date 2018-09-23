import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPackageById } from '../../store'
import PackageDetails from './PackageDetails'

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { packageId } } } = ownProps

  return {
    package: state.package
      .filter(item => item.id === parseInt(packageId, 10))
      .shift()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getPackageById }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageDetails)
