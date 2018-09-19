import { Component } from 'react'
import PropTypes from 'prop-types'
class LoadData extends Component {
  componentDidMount() {
    const { onLoad, children, ...rest } = this.props
    onLoad(rest)
  }
  render() {
    return this.props.children
  }
}

LoadData.propTypes = {
  onLoad: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default LoadData
