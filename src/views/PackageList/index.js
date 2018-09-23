import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPackages } from '../../store'
import PackageList from './PackageList'

const mapStateToProps = (state) => ({
  packages: state.package
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  getPackages
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList)
