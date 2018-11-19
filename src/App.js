import React, { Component } from "react";
import { fabric } from "fabric";
import "./App.css";

import FabricCanvas from "./components/FabricCanvas";
import CanvasHeader from "./components/CanvasHeader";
import CanvasFooter from "./components/CanvasFooter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProperty: null
    };
  }

  addToCanvas = (imgElement, property_type, z_Index) => {
    var imgInstance = new fabric.Image(imgElement, {
      width: 1200,
      height: 1800,
      the_type: property_type,
      zIndex: z_Index
    });

    this.setState({ activeProperty: imgInstance });
  };

  render() {
    return (
      <div>
        <CanvasHeader />
        <div id="content">
          <center>
            <table cellSpacing="0" cellPadding="0" id="canvas_editor_table">
              <tbody>
                <tr>
                  <td id="canvas_bg">
                    <FabricCanvas activeProperty={this.state.activeProperty} />
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
        <CanvasFooter />
      </div>
    );
  }
}

export default App;
