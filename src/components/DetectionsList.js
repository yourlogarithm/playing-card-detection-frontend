import '../App.css';
import { useEffect, useState } from 'react';

function compare(a, b) {
    return a['label'].localeCompare(b['label']);
}

export default function DetectionsList() {
    const [detections, setDetections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/detections'); 
                const text = await response.text();
                if (!text.length) {
                    setDetections([]);
                    return;
                }
                const data = JSON.parse(text);
                data.sort(compare);
                setDetections(data);
            } catch (error) {
                console.log(error);
            }
        };
        const interval = setInterval(() => { fetchData(); }, 500);
        fetchData();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='detections-section'>
            <h2>Detections</h2>
            <ul id='detection-list'>
                {detections.map((detection, index) => (
                    <li key={detection['label'] + index.toString()}>{detection['label']}</li>
                ))}
            </ul>
        </div>
    );
}