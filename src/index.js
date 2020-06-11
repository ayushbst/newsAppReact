import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsLists from './components/newsLists';

import './style/styles.css'
const getYear =() =>
{
    const year = new Date();
    return year.getFullYear();
}
const App =() =>{
    return( 
        <div>
            The date is : {getYear()}
            <Header/>
            <NewsLists/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))