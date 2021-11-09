import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)

    }

    clickHandler() {
        this.setState({
            message: "Goodbye!"
        })
        console.log(this)

    }

    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                {/* 1.Binding in the render method */}
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                {/* 2.Bind using arrow functions in the render method */}
                {/*<button onClick={() => this.clickHandler()}>Click</button> */}
                {/* 3.Binding in the class constructor - preferred method */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
