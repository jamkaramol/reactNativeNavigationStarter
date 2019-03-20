import React, { Component } from "react";
import {  Image } from "react-native";

export default class LogoTitle extends Component {
    render() {
      return (
          <Image
            source={{
              uri:
                "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-android-m.png"
            }}
              style={{ width:30, height: 30}}
          />
      );
    }
}