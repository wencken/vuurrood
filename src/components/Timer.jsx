import React, {Component} from 'react';
import styles from "../containers/About.module.css";

class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {seconds: this.props.seconds};
  }

  componentWillMount = () => {
    this.intervalID = setInterval(this.tick, 100);
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalID); 
  }

  tick = () => {
    this.setState(prevState => ({seconds: ++prevState.seconds}));
  }

  render(){
    const { text } = this.props;
    const { seconds } = this.state;
    
    return(
      <>
      { seconds > 26 ? <p className={styles.timer}>26 {text}</p>
      : <p className={styles.timer}>{seconds < 10 ?  `0${seconds}` : seconds} {text}</p> 
      }
      </>
    )
  }
}

export default Timer;