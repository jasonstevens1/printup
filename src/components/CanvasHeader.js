import React, { Component } from "react";

class CanvasHeader extends Component {
  render() {
    return (
      <div id="header">
        <button id="text" title="Text Tools" />
        <button id="images" title="Image Tools" />
        <button id="shapes" title="Shape Tools" />
        <button id="sort" title="Arrange and Sort" />
        <button
          id="bgcolor"
          title="Background Color"
          className="jscolor {closable:true,closeText:'Remove Background Color',valueElement:'backgroundChanger', styleElement:'backgroundInput'}"
        />{" "}
        <input type="hidden" id="backgroundChanger" value="ff6699" />{" "}
        <input type="hidden" id="backgroundInput" />
        <button id="jsonWriter" title="Save and Continue" className="right" />
        <button
          id="techSupport"
          title="Chat with Live Support"
          className="right hidden"
        />
      </div>
    );
  }
}

export default CanvasHeader;
