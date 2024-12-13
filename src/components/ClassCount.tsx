import React, { Component } from 'react'

class ClassCount extends Component<object, { count: number }> {
    constructor(props: object) {
        super(props);
        this.state = { count: 0 };
    }
    componentDidMount() {
        document.title = `count : ${this.state.count}`;
    } 
    componentDidUpdate() {
        document.title = `count : ${this.state.count}`;
    }
    render() {
        return (
            <div>
                <h1 className="flex justify-center">count : {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        )
    }
}

export default ClassCount