import './App.css';
import VideoStream from './components/VideoStream';
import DetectionsList from './components/DetectionsList';

function App() {
  return (
    <div className='app'>
      <VideoStream />
      <DetectionsList />
    </div>
  );
}

export default App;
