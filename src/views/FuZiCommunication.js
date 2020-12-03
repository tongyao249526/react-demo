import React, { Component } from 'react'
class Input extends Component {
    constructor(props) {
        super(props)
        console.log('props',props)
        this.state = {
            title:''
        }
    }
    onTitleChange = (e)=>{
        this.setState({
            title:e.target.value
        })
    }
    onSubmit = (e)=>{
        this.props.submitTitle(this.state.title)
        this.setState({
            title:''
        })
    }
    render(){
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange} />
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
}
export default class FuZiCommunication extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onSubmitTitle = (val) =>{
        console.log('val',val)
    }
    render() {
        return (
        <div>
            <Input submitTitle={this.onSubmitTitle}/>
        </div>
        )
    }
}