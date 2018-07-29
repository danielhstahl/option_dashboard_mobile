import {Component} from 'react'


class LoadData extends Component{
    componentDidMount() {
        this.props.onLoad( this.props)
    }
    render(){
        return this.props.children
    }
}

export default LoadData