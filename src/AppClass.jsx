import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  // code here

  render(){
    const imgData = this.imageData()
    return(
      <>
      <h1 className="gallaryName">Kalvium gallary</h1>
      <div className="body"> 
        {imgData.map((item)=>{
          return <img src={item.img} key={item.id} className="image" alt="" />
        })}
      </div>
      </>
    )
  }
}


