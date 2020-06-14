import React from 'react';


class Header extends React.Component{

    
    state = {
        input:'',
        count:0
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

    addCount(event)
    {
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
       return( <header>
           <div className="logo">Name:</div>
           <input id="t1" onChange = {(event) => this.getInput(event)}/>
           <button
           onClick = {(event) => this.inputEvent(event)}> OK </button>         
           <div> {this.state.input}</div>
           <div> Count : {this.state.count}</div>
           <div>
               <button onClick = {() => this.addCount()}>Increase</button>
           </div>
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