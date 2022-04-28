import './App.css';
import Progressbar from './component/Progress_bar';

function App() {
  return (

    <div className="App">
      <h5 className="heading">LOREM IPSUM</h5>
      <Progressbar bgcolor="#00D09C" progress='40' height={25} />
      <h5 className="heading">LOREM IPSUM</h5>
      <Progressbar bgcolor="#00D09C" progress='80' height={25} />
      <h5 className="heading">LOREM IPSUM</h5>
      <Progressbar bgcolor="#00D09C" progress='55' height={25} />
      <h5 className="heading">LOREM IPSUM</h5>
      <Progressbar bgcolor="#00D09C" progress='35' height={25} />
    </div>

  );
}

export default App;