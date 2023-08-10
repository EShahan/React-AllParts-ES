import data from './../data.json';
import {useState} from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const projects = Object.keys(data);
    function handleClick() {
        console.log(index);
        console.log(projects);
        console.log(data);
        if (index < projects.length-1)
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
            <h2></h2>
        </div>

    );
}