import React from "react";

const Greet = (props) => {
    const { name, sname } = props
    //console.log(props)
    return (
        <div>
            <h1>Hello {name} {sname}</h1>
        </div>
    )
}

export default Greet