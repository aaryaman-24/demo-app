import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // 1. Using if else blocks
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Aaryaman</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // 2. Using element variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Aaryaman</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 3. Ternary operator
        return (
            this.state.isLoggedIn ?
                <div>Welcome Aaryaman</div> :
                <div>Welcome Guest</div>
        )

        // 4. Short Circuit operator
        // return(
        //     this.state.isLoggedIn && <div>Welcome Aaryaman</div>
        // )


    }
}

export default UserGreeting
