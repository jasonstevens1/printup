import React, { Component } from "react";
import FabricCanvas from "./components/FabricCanvas";
import { fabric } from "fabric";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProperty: null
    };
  }

  addToCanvas = (imgElement, property_type, z_Index) => {
    var imgInstance = new fabric.Image(imgElement, {
      width: 1024,
      height: 768,
      the_type: property_type,
      zIndex: z_Index
    });

    this.setState({ activeProperty: imgInstance });
  };

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="row">
            <div className="col-md-12">
              <FabricCanvas activeProperty={this.state.activeProperty} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
