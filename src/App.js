import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Chào mừng bạn đến với khoá học Reactjs</h1>
        </header>
        <main className="App-main">
          <p>
            Để bắt đầu học vui lòng truy cập <code>src/App.js</code> chỉnh sửa và lưu lại.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
