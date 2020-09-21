import React from 'react';
import './Drum.css';

const drumPads = [
  { letter: 'Q', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', label: 'Heater 1'},
  { letter: 'W', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', label: 'Heater 2'},
  { letter: 'E', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', label: 'Heater 3'},
  { letter: 'A', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', label: 'Heater 4'}, 
  { letter: 'S',  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", label: "Clap"},
  { letter: 'D',  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", label: "Open Hat"},
  { letter: 'Z',  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", label: "Kick and Hat"},
  { letter: 'X',  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", label: "Kick"},
  { letter: 'C',  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", label: "Hi Hat" }
]
class Drum extends React.Component {
  constructor(props) {
      super(props);
      this.state = { input: "Play the drum by clicking or pressing the corresponding key"};
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleClick = e => {
     let audio = e.target.querySelector("audio");
     audio.play();
     this.setState ({ input: e.target.id });
  }
  handleKeyPress = e => {
    let audio = document.querySelector("div.drum-pad audio[id=" + e.key.toUpperCase() + "]");
    audio.play();
    let padElement = document.querySelector("div.drum-pad[name=" + e.key.toUpperCase() + "]");
    //console.log(padElement);
    this.setState ({ input: padElement.id });
  }
  // mount key press event
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  };
  
  render() {
    let pads = Object.keys(drumPads).map((idx)=>{
        return (
            <div className="drum-pad"
                 id={drumPads[idx].label} 
                 name={drumPads[idx].letter}
                 onClick={this.handleClick}
                 onKeyPress={this.handleKeyPress}
            >      
            {drumPads[idx].letter}   
            <audio className="clip" id={drumPads[idx].letter} src={drumPads[idx].url} />
            </div>
        )
    });

    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">
          {this.state.input}
        </div>
        <div id="drum-pad-container">       
          {pads}
        </div>
        <div id="footer">by C.Fung</div>
      </div>
    );
        
  }
}

export default Drum;