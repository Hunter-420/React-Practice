import React from "react";
const HelloProps = (props) => {
    console.log(props)
    return <h1>Hello {props.firstName} {props.lastName}</h1>
}
export default HelloProps