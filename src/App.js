import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <ConditionalRendering number={1}></ConditionalRendering>
      <ConditionalRendering number={3}></ConditionalRendering>
      <ConditionalRendering></ConditionalRendering>
      
    </div>
  );
}

export default App;
