import React  from "react";
import logo from "./logo.png";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from  "./component/search-box/search-box.component";
import "./App.css"



      
    class App extends React.Component{
        constructor(){
            super();
            //
            this.state={
                        monsters:[],
                        searchField:''
                      }
         //---- class method you must declare the bind  for function but in arrow function no             
        // this.handelChange=this.handelChange.bind(this);                     
        }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(user=>this.setState({monsters:user}));

    }
  //---- class method you must declare the bind  for function but in arrow function no  
    //  handelChange(e){this.setState({searchField:e.target.value});}
    // arrow function is not need bind 
    handelChange=(e)=>{this.setState({searchField:e.target.value});}

    render(){
        const { monsters,searchField }=this.state;
        const filteredMonsters =monsters.filter( monster =>
             monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return(

        <div className='App' >
            <h1>Ghadir Zhiyani</h1>
            <SearchBox   
            placeholder="Search Monster" 
            handelChange={this.handelChange}
            />
            <CardList monsters={filteredMonsters} />
        
        </div>
      
    );
        }
        
    
}

export default App;