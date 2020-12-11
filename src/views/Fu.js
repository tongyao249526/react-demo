import React, { Component } from 'react'
import Zi from './zi'; 
export default class Fu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    updateState = () => {
        this.setState({
            count: 1
        })
    }
    componentWillMount() {
        console.log('父组件componentWillMount')
    }
    componentDidMount() {
        console.log('父组件componentDidMount')
    }
    componentWillUpdate(){
        console.log('父组件componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('父组件componentDidUpdate')
    }
    shouldComponentUpdate() {
        console.log('父组件shouldComponentUpdate')
        return true
    }
    render() {
        console.log('父组件render')
        return (
            <div onClick={this.updateState}>
                父组件
                <Zi/>
            </div>
        )

    }
}