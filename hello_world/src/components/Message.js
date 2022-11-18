// In class components we need to include two import
import React, {Component} from "react";

// define class named as Message
class Message extends Component
{
    // this class must need to be implement render method 
    // render return NULL or some HTML
    constructor()
    {
        super()
        this.state =
        {
            message: "Welcome Visitor"
        }
    }

    changeMessage()
    {
        this.setState({
            message:"Thank you for subscribing"
        })
    }
    render()
    {
        return (
           <div>
             <h1>
               {this.state.message}
            </h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
           </div>
        )
    }
}

export default Message