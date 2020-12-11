import React, { Component } from 'react'
export default class Zi extends Component {
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
        console.log('子组件componentWillMount')
    }
    componentDidMount() {
        console.log('子组件componentDidMount')
    }
    componentWillUpdate(){
        console.log('子组件componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('子组件componentDidUpdate')
    }
    shouldComponentUpdate() {
        console.log('子组件shouldComponentUpdate')
        return true
    }
    componentWillReceiveProps(){
        console.log('子组件componentWillReceiveProps')
    }
    render() {
        console.log('子组件render')
        return (
            <div onClick={this.updateState}>
                {/* 子组件 */}
            </div>
        )

    }
}