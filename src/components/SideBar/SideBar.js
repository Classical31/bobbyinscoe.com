import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    const sideTitle = <h3>This is the sidebar</h3>;
    return <div className="SideBar">{sideTitle}</div>;
  }
}
