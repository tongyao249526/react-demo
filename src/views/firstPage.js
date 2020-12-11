import React, { Component } from 'react'
export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        // console.log('props',props)
        this.state = {
            count: 0,
            name: '1',
            a:[1,2,3]
        }
        // this.click1 = this.click1.bind(this)
    }
    componentDidMount() {
        // this.setState({ count: this.state.count + 1 })
        // console.log(this.state.count)
        // this.setState({ count: this.state.count + 1 })
        // console.log(this.state.count)
        // setTimeout(() => {
        //     this.setState({ count: this.state.count + 1 })
        //     console.log(this.state.count)
        // }, 0)
        // setTimeout(() => {
        //     this.setState({ count: this.state.count + 1 })
        //     console.log(this.state.count)
        // }, 0)
        let list1 = [1,2,[3,[4,5]]]
        let list2 = list1.slice()
        list2.push(100)
        // console.log('list2',list1)
        // console.log('list4',list4)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    click1 = (e) => {
        // console.log('e', e)
        // console.log('',e.nativeEvent.target)
        // console.log('',e.nativeEvent.currentTarget)
        // console.log('',e.target)
        // console.log('',e.currentTarget)
        this.setState({
            a: [...this.state.a,100]
        })
        // this.state.a.push(100)
        // console.log('a',this.state.a)
    }
    render() {
        console.log('render重新执行')
        return (
        <div>
            <h1 onClick={this.click1}>{this.state.count}</h1>
        </div>
        )
        
    }
}