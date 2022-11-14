import './App.css';
import mainPhoto from "./images/imageequilibrium.jpg";
import centerEye from "./images/icon-view.svg"

function App() {
  return (
    <div className='Full-Con'>
      <ImageCon />
      <h3 className='img-Title'><a href="#"> Equilibrium #3429</a></h3>
      <p className='p-Text'>Our Equilibrium collection promotes balance and calm.</p>
      
    </div>
  )
}

function ImageCon() {
  return ( <div className='imageCon'>
    <img src={mainPhoto} alt="11" className='innerImage' />
    <div className='eyeCon'><img src={centerEye} alt="22" /></div>
  </div>)

}


export default App;
