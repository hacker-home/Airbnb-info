import React from 'react';
import $ from 'jquery';
import Superhost from './Superhost.jsx';
import GreatCheckin from './GreatCheckin.jsx';
import SparklingClean from './SparklingClean.jsx';
import GreatLocation from './GreatLocation.jsx';
import SelfCheckin from './SelfCheckin.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            listings: [],
            displaySpaceText: false
        }
        this.displaySpaceInfo = this.displaySpaceInfo.bind(this);
    }

    componentDidMount() {
        $.get({
            url: '/listings/3',
            success: (data) => {
                this.setState({listings: data});
            }
        });
    }
    displaySpaceInfo() {
        this.setState({
           displaySpaceText: !this.state.displaySpaceText
        })
    }
    render() {
        let bedroom = 'bedrooms';
        let bath = 'baths';
        let bed = 'beds';
        let isSuperhost, isGreatCheckIn, isSparklingClean,isGreatLocation, isSelfCheckIn;
        let svgIcon = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{
            height:'10px',
            width:'10px',
            display:'block',
            fill:'#008489',
        }}
            ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>;
        if (this.state.listings.numberOfBedrooms === 1) {
            bedroom = 'bedroom';
        }
        if (this.state.listings.numberOfBaths === 1) {
            bath = 'bath';
        }       
        if (this.state.listings.numberOfBeds === 1) {
            bed = 'bed';
        }
        if (this.state.listings.isSuperhost === true) {
            isSuperhost = <Superhost />;
        }
        if (this.state.listings.isGreatCheckIn === true) {
            isGreatCheckIn = <GreatCheckin/>;
        }
        if (this.state.listings.isSparklingClean === true) {
            isSparklingClean = <SparklingClean />;
        }
        if (this.state.listings.isGreatLocation === true) {
            isGreatLocation = <GreatLocation />;
        }
        if (this.state.listings.isSelfCheckIn === true) {
            isSelfCheckIn = <SelfCheckin />
        }
        return (
            <div id="main">
                <div className="title-summary-div">
                    <div className="innercontent-div">
                        <div className="title">
                            <h1><span>{this.state.listings.title}</span></h1>
                        </div>
                        <div className="city-name">
                            {this.state.listings.city}
                        </div>
                    </div>
                    <div className="host-image"><img className="host-image" src={this.state.listings.hostImage}/>
                    </div>   
                </div>
                <div className="highlights">
                    <div className="room-info">
                        <div className="icon"><i className="fas fa-home fa-xs"></i></div>
                        <div className="room-description">
                        <div className="room-title">
                            {this.state.listings.roomInfo}
                        </div>
                        <div className = "guest-info">
                            <div>{this.state.listings.numberOfGuests} guests</div>
                            <div>{this.state.listings.numberOfBedrooms} {bedroom}</div>
                            <div>{this.state.listings.numberOfBeds} {bed}</div>
                            <div>{this.state.listings.numberOfBaths} {bath}</div>
                        </div>
                        </div>
                    </div>
                    {isSuperhost}    
                    {isGreatCheckIn}
                    {isSparklingClean}
                    {isGreatLocation}
                    {isSelfCheckIn}
                </div>
                <hr/>
                <div className="space-intro">
                    <p>New renovated Garden Suite with separated entrance, private Living room, private Bathroom</p>
                </div>
                {this.state.displaySpaceText ? (
                    <div className="space">
                         <p><b>The Space</b></p>
                         <p>{this.state.listings.description}</p>
                    </div>
                ): null}
                <div className="space-onclick" onClick={this.displaySpaceInfo}>
                    {this.state.displaySpaceText ? 'Hide' : 'Read more about the space'}
                    <div className="arrow-svg">
                        {svgIcon}
                    </div>
                </div>
                <br />
                <p className="host">Contact host</p>
                <hr/>
            </div>
        );
    }
}


export default App;