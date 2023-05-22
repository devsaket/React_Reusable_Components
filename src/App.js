import logo from './logo.svg';
import './App.scss';
import ProgressBars from './Components/ProgressBars';
import RBootstrapProgressBar from './Components/ProgressBars/RBootstrapProgressBar';

function App() {
  return (
    <>
      {/* <ProgressBars /> */}
      <RBootstrapProgressBar progress={78} delayTime={400} />
    </>
  );
}

export default App;
