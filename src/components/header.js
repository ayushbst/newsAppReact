import React from 'react';


class Header extends React.Component{

    
    state = {
        input:''
    }
    getInput(event)
    {
        this.setState({
            input:event.target.value
        })
    }
    inputEvent(event)
    {
        console.log(this.state.input);
    }

    render(){
       return( <header>
           <div className="logo">Name:</div>
           <input id="t1" onChange = {(event) => this.getInput(event)}/>
           <button
           onClick = {(event) => this.inputEvent(event)}> OK </button>         
           <div> {this.state.input}</div>
       </header>
       )
    }
}
/*const Header =() => 
{
    return(
    <div>This is a news item</div>)
}*/

export default Header;