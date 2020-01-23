import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Chart from "react-google-charts";
import $ from "jquery"

import axios from 'axios';

class Mrtg extends Component {

  constructor(props) {
    super(props);
    this.state = {
			imageStatus: false
	  };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: true });
  }

  handleImageErrored() {
    this.setState({ imageStatus: false });
  }

  render() {

		const eth   = typeof(this.props.traff) !== "undefined" && this.props.traff ? this.props.traff : "bridge";
    const name  = typeof(this.props.name) !== "undefined" && this.props.name ? this.props.name : "Trunk";

    return (

			<div className="row">

				<div className="row">

          <div className="col-md-6">

              <div className="panel panel-warning">

                  <div className="panel-heading">
                      <div className="panel-title-box">
                          <h3>{name}</h3>
                          <span>"Daily" Graph (5 Minute Average).</span>
                      </div>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="form-group">

                          <center>

              							<img
              								src={this.state.imageStatus ? "//202.164.218.74/graphs/iface/" + eth + "/daily.gif" : "//www.thynkactive.com/Images/loader.gif" }
              								alt="John Doe"
              								className="mCS_img_loaded"
              								onLoad={this.handleImageLoaded.bind(this)}
              								onError={this.handleImageErrored.bind(this)}
              							/>

              						</center>

                          </div>
                      </div>
                  </div>

              </div>

          </div>

          <div className="col-md-6">

              <div className="panel panel-warning">

                  <div className="panel-heading">
                      <div className="panel-title-box">
                          <h3>{name}</h3>
                          <span>"Weekly" Graph (30 Minute Average).</span>
                      </div>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="form-group">

                          <center>

              							<img
              								src={this.state.imageStatus ? "//202.164.218.74/graphs/iface/" + eth + "/weekly.gif" : "//www.thynkactive.com/Images/loader.gif" }
              								alt="John Doe"
              								className="mCS_img_loaded"
              								onLoad={this.handleImageLoaded.bind(this)}
              								onError={this.handleImageErrored.bind(this)}
              							/>

              						</center>

                          </div>
                      </div>
                  </div>

              </div>

          </div>

				</div>

				<div className="row">

          <div className="col-md-6">

              <div className="panel panel-warning">

                  <div className="panel-heading">
                      <div className="panel-title-box">
                          <h3>{name}</h3>
                          <span>"Monthly" Graph (2 Hour Average).</span>
                      </div>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="form-group">

                          <center>

                            <img
                              src={this.state.imageStatus ? "//202.164.218.74/graphs/iface/" + eth + "/monthly.gif" : "//www.thynkactive.com/Images/loader.gif" }
                              alt="John Doe"
                              className="mCS_img_loaded"
                              onLoad={this.handleImageLoaded.bind(this)}
                              onError={this.handleImageErrored.bind(this)}
                            />

                          </center>

                          </div>
                      </div>
                  </div>

              </div>

          </div>

          <div className="col-md-6">

              <div className="panel panel-warning">

                  <div className="panel-heading">
                      <div className="panel-title-box">
                          <h3>{name}</h3>
                          <span>"Yearly" Graph (1 Day Average).</span>
                      </div>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="form-group">

                          <center>

                            <img
                              src={this.state.imageStatus ? "//202.164.218.74/graphs/iface/" + eth + "/yearly.gif" : "//www.thynkactive.com/Images/loader.gif" }
                              alt="John Doe"
                              className="mCS_img_loaded"
                              onLoad={this.handleImageLoaded.bind(this)}
                              onError={this.handleImageErrored.bind(this)}
                            />

                          </center>

                          </div>
                      </div>
                  </div>

              </div>

          </div>

				</div>

			</div>

    );
  }
}

class App extends React.Component {

	constructor(props) {

    super(props);

    this.state = {
      active: 'bridge',
			toggled: false,
			memory: 0,
			cpu: 0,
			rx: 0,
      tx: 0,
      name: '',
      fetch: false
     };


  }

	handleClick = async (value, names) => {

		await this.setState({
			active: ( typeof(value) !== "undefined" && value ? value : "bridge"),
      name: ( typeof(value) !== "undefined" && value ? names : "Trunk")
		});

	};

  checkNetwork = async () => {

    if ( !this.state.fetch ) {

      await this.setState({ fetch: true });

      const res = await axios.get( 'api/' + this.state.active );
      const { data } = await res;

      if ( typeof( data.status ) !== "undefined" ) {

        this.setState({
          cpu: data.data.cpu,
          memory: data.data.ram,
          tx: data.data.tx,
          rx: data.data.rx
        })

      }

      await this.setState({ fetch: false });

    }

    setTimeout(this.checkNetwork.bind(this), 1000);

  }


	componentDidMount() {
    this.checkNetwork();
	}

  componentWillUnmount() {
  }

	render() {

	  return (

			<div className="page-container">

	      <div className="page-sidebar">

          <ul className="x-navigation">
              <li className="xn-profile">
                  <div className="profile">
                      <div className="profile-data">
                          <div className="profile-data-name">MRTG</div>
                          <div className="profile-data-title">DPRD KOTA BATU</div>
                      </div>

                  </div>
              </li>
              <li className="xn-title">Navigation</li>

              <li className="xn-openable ">
                <a dangerouslysethref="javascript:" onClick={ () => this.handleClick("", "Trunk") }> <span className="fa fa-dashboard"></span> <span className="xn-text"> Trunk </span> </a>
              </li>
              <li className="xn-openable ">
                <a dangerouslysethref="javascript:" onClick={ () => this.handleClick("ether2", "Speedy 1") }> <span className="fa fa-dashboard"></span> <span className="xn-text"> Speedy 1 </span> </a>
              </li>
              <li className="xn-openable ">
                <a dangerouslysethref="javascript:" onClick={ () => this.handleClick("ether3", "Speedy 2") }> <span className="fa fa-dashboard"></span> <span className="xn-text"> Speedy 2 </span> </a>
              </li>
              <li className="xn-openable ">
                <a dangerouslysethref="javascript:" onClick={ () => this.handleClick("ether9", "Dedicated") }> <span className="fa fa-dashboard"></span> <span className="xn-text"> Dedicated </span> </a>
              </li>

          </ul>

	      </div>

	      <div className="page-content">

					<div className="page-content-wrap">

            <br />

            <div className="row">

            </div>

            <br />

						<div className="row">

							<div className="col-sm-12">

								<center>

									<Chart
						        width={600}
						        height={250}
						        chartType="Gauge"
						        loader={<div>Loading Chart</div>}
						        data={[
						          ['Label', 'Value'],
						          ['Memory', this.state.memory],
						          ['CPU', this.state.cpu],
						          ['Upload', this.state.rx],
						          ['Download', this.state.tx],
						        ]}
						        options={{
						          redFrom: 90,
						          redTo: 100,
						          yellowFrom: 75,
						          yellowTo: 90,
						          minorTicks: 5,
						        }}
						        rootProps={{ 'data-testid': '1' }}
						      />

								</center>

							</div>

						</div>

						<Mrtg traff={this.state.active} name={this.state.name}/>

		      </div>

	      </div>

	    </div>


	  );

	}

}

export default App;
