import { render } from "@testing-library/react";
import React, { Component } from "react";
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: { title: "WEB", sub: "world wid web!" },
      welcome: { title: "Welcom", desc: "hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "Css is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interactive" },
      ],
    };
  }

  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>

        <Toc data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
