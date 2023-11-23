import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            food: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ food: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const { food, searchfield} = this.state;
    const filterFood = food.filter(food => {
        return food.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        return !food.length ?
            <h1>Loading</h1> :
                <div className='tc'>
                    <h1 className='f1'>ShopList</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList food={filterFood}/>
                    </Scroll>
                </div>
    }
}

export default App;