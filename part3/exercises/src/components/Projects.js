import data from './../data.json';
import {useState} from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const dataList = data.projects;
    const dataDisplay = data.projects[index];
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return (
        <div>
            <button onClick={handleClick}>
                Next
            </button>
            <ul>
                <li>{dataDisplay.canvas}</li>
                <li>{dataDisplay.designer}</li>
                <li>{dataDisplay.photoUrl}</li>
                <li>{dataDisplay.alt}</li>
            </ul>
        </div>
        

    );
}