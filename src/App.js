import logo from './logo.svg';
import './App.css';
import FirstPage from './views/firstPage'; //react合成事件
import SyntheticEvent from './views/SyntheticEvent'; //react合成事件
import FuZiCommunication from './views/FuZiCommunication'; //父子组件通讯
import Fu from './views/Fu'; //父子组件生命周期执行顺序
function App() {
  return (
      
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <FirstPage />
      {/* <SyntheticEvent/> */}
      {/* <FuZiCommunication/> */} 
      {/* <Fu/> */}
    </div>
  );
}

export default App;
