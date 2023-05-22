import React, {useState, useEffect} from 'react'
import './style.scss'
import FramerProgressBar from './FramerProgressBar';

const ProgressBars = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const id = setInterval(() => {
        setProgress(85);
      },3000);
      return () => {
        clearInterval(id);
      }
    }, []);
    return (
      <div className="ProgressBars">
        <FramerProgressBar value={progress}/>
      </div>
    );
}

export default ProgressBars