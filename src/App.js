import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myData from './gkmc.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: "about", lyric:44 };
  }



    render() {

        const annotations = myData[1].annotation;
        console.log(annotations[0]);

        const namesList = myData.map(name => {
            //go through the name.literary
            const lyrics_dom = [];

            if (name.type != "content" && name.type != "kendrick-content"){
                lyrics_dom.push(<div className = "fill"></div>);
            }

            for (var i = 0; i < name.content.length; i++){
                //logic for literary devices should be here as well as whats selected
                if (this.state.lyric == name.lyric_id){
                    lyrics_dom.push(<div className = "lyric-sel" onClick={() => this.setState({ lyric: name.lyric_id }) }> 
                    <span>{name.content[i]} </span></div>);
                }

                else if(name.lyric_id == 1 || name.lyric_id == 29 || name.lyric_id == 43){
                    lyrics_dom.push(<div className = "lyric-foreshadow" onClick={() => this.setState({ lyric: name.lyric_id }) }> 
                    <span>{name.content[i]} </span></div>);
                }

                else if(name.lyric_id == 3 || name.lyric_id == 20 || name.lyric_id == 23 || name.lyric_id == 27 || name.lyric_id == 28){
                    lyrics_dom.push(<div className = "lyric-simile" onClick={() => this.setState({ lyric: name.lyric_id }) }> 
                    <span>{name.content[i]} </span></div>);
                }

                else if(name.lyric_id == 6 || name.lyric_id == 10 || name.lyric_id == 12 || name.lyric_id == 26){
                    lyrics_dom.push(<div className = "lyric-metaphor" onClick={() => this.setState({ lyric: name.lyric_id }) }> 
                    <span>{name.content[i]} </span></div>);
                }

                else{
                    lyrics_dom.push(<div className = "lyric" onClick={() => this.setState({ lyric: name.lyric_id }) }> 
                    <span>{name.content[i]} </span></div>);
                }

            }

            if (name.type != "content" && name.type != "kendrick-content"){
                lyrics_dom.push(<div className = "fill"></div>);
            }

            return lyrics_dom;    
        })

        const annList = myData[this.state.lyric].annotation.map(name => {
            for (var i = 0; i < name.length; i++){
                return (<div className = "annotation-box"> {name} </div>);
            }    
        })

        

    if (this.state.liked == "samples"){

    return (
        <div className="x">
        
      
      <div className = "info-headers">
      <nav>
      <ul>
        <li className = "gkmc-menu" onClick={() => this.setState({ liked: "about" }) }><a>ABOUT</a></li>
        <li className = "gkmc-menu" onClick={() => this.setState({ liked: "tracklist" }) }>
        <a className = "gkmc-menu">TRACKLIST</a>
        </li>
        <li className = "gkmc-menu-active" onClick={() => this.setState({ liked: "samples" }) }><a className = "gkmc-menu-active">SAMPLES</a></li>
      </ul>
    </nav>
    <div className = "samples">

    </div>

    </div>
    </div>
    );
    }

    if (this.state.liked == "sherane") {
        
        return (
      <div className = "song-all">
        <div className = "back_button"> </div>
        <div className = "song-header">
            01. Sherane a.k.a Master Splinter's Daughter
        </div>

        <div className = "song-main">
            <div className = "lyrics-section">{namesList}</div>
            <div className = "lyric-breakdown">
                <div className = "breakdown-annotations">
                {annList}
                </div>
                <div className = "lyric-literary">

                </div>

            </div>

        </div>
      </div>
        
      

    );

    }



    if (this.state.liked == "tracklist") {
   
        return (
      <div className="x">
        
      
      <div className = "info-headers">
      <nav>
      <ul>
        <li className = "gkmc-menu" onClick={() => this.setState({ liked: "about" }) }><a>ABOUT</a></li>
        <li className = "gkmc-menu-active" onClick={() => this.setState({ liked: "tracklist" }) }>
        <a className = "gkmc-menu-active">TRACKLIST</a>
        </li>
        <li className = "gkmc-menu" onClick={() => this.setState({ liked: "samples" }) }><a>SAMPLES</a></li>
      </ul>
    </nav>
    <div className = "tracks">
    <div className = "trackside1">
        <div className = "track_title_valid" onClick={() => this.setState({ liked: "sherane" }) }>
        <span className = "track-num">01.</span> Sherane a.k.a. Master Splinter's Daughter
        </div>

        <div className = "track_title">
        <span className = "track-num">02.</span> Bitch Don't Kill My Vibe
        </div>

        <div className = "track_title">
        <span className = "track-num">03.</span> Backseat Freestyle
        </div>

        <div className = "track_title">
        <span className = "track-num">04.</span> The Art of Peer Pressure
        </div>

        <div className = "track_title">
        <span className = "track-num">05.</span> Money Trees
        </div>

        <div className = "track_title">
        <span className = "track-num">06.</span> Poetic Justice
        </div>

    </div>

    <div className = "trackside2">
        <div className = "track_title">
        <span className = "track-num">07.</span> Good Kid
        </div>

        <div className = "track_title">
        <span className = "track-num">08.</span> m.A.A.d city
        </div>

        <div className = "track_title">
        <span className = "track-num">09.</span> Swimming Pools
        </div>

        <div className = "track_title">
        <span className = "track-num">10.</span> Sing About Me, I'm Dying of Thirst
        </div>

        <div className = "track_title">
        <span className = "track-num">11.</span> Real
        </div>

        <div className = "track_title">
        <span className = "track-num">12.</span> Compton
        </div>

    </div>

    </div>





    </div>
    </div>
    );
    }

    if (this.state.liked == "about"){

    return (
      <div>
        
      
      <div className = "info-headers">
      <nav>
      <ul>
        <li className = "gkmc-menu-active"><a className = "gkmc-menu-active">ABOUT</a></li>
        <li onClick={() => this.setState({ liked: "tracklist" }) } className = "gkmc-menu"><a>TRACKLIST</a></li>
        <li onClick={() => this.setState({ liked: "samples" }) } className = "gkmc-menu"><a>SAMPLES</a></li>
      </ul>
    </nav>
    <div className = "about-desc">
    good kid m.a.a.d city is a concept album depicting the life of a 17 year old Kendrick Lamar. Lamar explains the title and premise of the 
    album as a representation of his inner conflict as growing up in the streets of Compton as “The kid thats trying to 
    escape that influence, (but) has always been pulled back in because of the circumstances that be.” The album covers the 
    tragedies of inner city life in Compton as well as a celebration
    of his upbringing. See a track by track breakdown for an in depth analysis in the tracklist section above.

    </div>
    <div className = "about-desc-accolades">

    <div className = "gkmc-circle1">
    <div className = "stat">5</div>

    </div>
    <div className = "stat-name">
    Grammy Nominations
    </div>

    <div className = "gkmc-circle2">
    <div className = "stat">2</div>

    </div>
    <div className = "stat-name">
    Peak Billboard Spot
    </div>

    <div className = "gkmc-circle3">
    <div className = "stat-small">305</div>
    </div>
    <div className = "stat-name-smol">
    Weeks on Billboard 200
    </div>

    </div>

    <div className = "about-desc-sub">
    Named best album of 2012 by
    BBC, Complex, Fact, New York, and Pitchfork
    </div>

    </div>
    </div>
    );
}
  }
}




export default App;
