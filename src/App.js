import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { food } from './food';
import getDownloads from './pages/getDownloads';



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

    const getDownloads = async () => {
            fetch('http://localhost:3000//pages/getDownloads')
    }

    const filterFood = this.state.food.filter(food => {
        return food.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return(
            <div className='tc'>
                <h1>ShopList</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <button onClick={getDownloads} type='button'>Go</button>
                <CardList food={filterFood}/>
            </div>
        )
    }
}

export default App;