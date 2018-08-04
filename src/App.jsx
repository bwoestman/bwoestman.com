import Navbar from "./navbar/Navbar";
import * as React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar title="bdub" />
      </div>
    );
  }
}

export default App;
