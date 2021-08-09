import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom' 
import './Music.scss'
import musicPic from '../../../assets/img/Music.png'
import music from'./Level04Loop.mp3'


class Music extends PureComponent {
  state = {
    audio:new Audio(music),
    Flag :false
  };

  componentDidMount() {
    window.addEventListener('touchstart',()=>{
      console.log(this.props.location);
      if(this.props.location.pathname==='/create')
      this.state.audio.play()
    })
  }
 
  
   control = () => {
    const {music} =this
    const {audio,Flag} = this.state
    audio.preload = Flag; 
    audio.autoplay =Flag;
    audio.loop = Flag;
     this.setState({Flag:!Flag},()=>{
      music.style.animation =Flag?'rotate 20s linear infinite':'rotate 20s linear infinite paused';
      if(Flag){
        this.state.audio.play()
      }else{
        this.state.audio.pause()
      }
     })
  }
  render() {
    return (
      <img alt='music' className='audioBox' ref={c => this.music =c} onClick={this.control} 
      style={{animation:'rotate 20s linear infinite'}} src={musicPic}/>
    );
  }
}
export default withRouter(Music)



