import React, { Component } from 'react'
export default class SyntheticEvent extends Component {
    constructor(props) {
        super(props)
        console.log('props',props)
        this.state = {
            count: 0,
            name: '1'
        }
        // this.click1 = this.click1.bind(this)
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count)
        }, 0)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count)
        }, 0)
    }
    click1 = (e) => {
        console.log('e', e)
        console.log('',e.nativeEvent.target)
        console.log('',e.nativeEvent.currentTarget)
        console.log('',e.target)
        console.log('',e.currentTarget)
    }
    render() {
        return (
        <div>
            <h1 onClick={this.click1}>{this.state.count}</h1>
        </div>
        )
        
    }
}