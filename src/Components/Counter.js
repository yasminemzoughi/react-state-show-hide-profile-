import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.person = {
    FullName : "yasmine",
    profession : "web developer" ,
    Age : 22 , 
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-SIVcNBZZtQWXtJ0PjB09klvdaNLJiFiis-3bZpCUAhHBOPvD3hu0CIyMeWZBasewsY&usqp=CAU"
        }
        this.state ={count : 0}
}
componentDidMount(){
  setInterval(()=> {
    this.setState(prevState=>({
      count : prevState.count + 1/2  
    }))
  } , 1000 )
}



  render() {
    return (
      <div>
         <h2> {this.person.FullName} </h2>
         <h2> {this.person.Age} </h2>
         <h2> {this.person.profession} </h2>
         <h1>{this.state.count}</h1>
         <img src={this.person.img} alt='pic' />
      </div>
    )
  }
}
