import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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
const imgData = imageData() 
function App() {
  return(
    <>
    <div>
      <div>
        <h1 className='gallaryName'>Kalvium gallary</h1>
      </div>
      <div className='body'>
       {
        imgData.map((image,index) =>{
          return(
            
            <div key={index}>
            <img src={image.img} alt="" className='image'/>
            </div>
          )
        })
       }
      </div>
    </div>
    </>
  )
  
 
}


export default App;