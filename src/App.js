import './App.css';
import mainPhoto from "./images/imageequilibrium.jpg";
import centerEye from "./images/icon-view.svg";
import styles from "./app.module.css";
import ethImg from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

function App() {
  return (
    <div className='Full-Con'>
      <ImageCon />
      <h3 className='img-Title'><a href="#"> Equilibrium #3429</a></h3>
      <p className='p-Text'>Our Equilibrium collection promotes balance and calm.</p>
      <ETHAndDay />
      <User />
      
    </div>
  )
}

function ImageCon() {
  return ( <div className='imageCon'>
    <img src={mainPhoto} alt="11" className='innerImage' />
    <div className='eyeCon'><img src={centerEye} alt="22" /></div>
  </div>)

}

function ETHAndDay() {
  return (
    <div className={styles.ethCom}>
      <p className={styles.p}><img className={styles.eth} src={ethImg} alt="1" /> 0.041 ETH</p>
      <p className={styles.p2}><img className={styles.eth} src={clock} alt="2" /> 3 days left</p>
    </div>
  )

}

function User() {
  return (
    <div className='user-Con'>
      <div className='user-img'></div>
      <p>Creation of <a href="#">Jules Wyvern</a></p>

    </div>
  )
}



export default App;
