import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { food } from './food';



class App extends Component{
    constructor() {
        super()
        this.state = {
            food: food,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
    const filterFood = this.state.food.filter(food => {
        return food.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return(
            <div className='tc'>
                <h1>ShopList</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList food={filterFood}/>
            </div>
        )
    }
}

export default App;