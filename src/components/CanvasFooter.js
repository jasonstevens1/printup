import React, { Component } from "react";

class CanvasFooter extends Component {
  render() {
    return (
      <div id="footer">
        <button id="zoom_in" title="Zoom In" />
        <button id="zoom_out" title="Zoom Out" />
        <button id="deleteAll" title="Clear All" className="right" />
        <button id="deleteSelected" title="Clear Selected" className="right" />
      </div>
    );
  }
}

export default CanvasFooter;
