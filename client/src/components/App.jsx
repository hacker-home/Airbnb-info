import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            listings: []
        }
    }

    componentDidMount() {
        $.get({
            url: '/listings/80',
            success: (data) => {
                console.log('SUCCESS');
                this.setState({listings: data});
            }
        });
    }
    render() {
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
                    <div className="host-image-div">
                        <div className="host-image-margin-bottom">
                            <div className="host-image"><img className="host-image" src={this.state.listings.hostImage}/></div>
                        </div>
                    </div> 
                </div>
                <div className="room-info">
                    <div className="room-description">
                      <div className="room-title">
                        {this.state.listings.roomInfo}
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
}


export default App;