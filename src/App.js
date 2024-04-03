import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { Spinner } from './components/Spinner';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';

function App() {
    // const [courses, setCourses] = useState(true);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            let response = await fetch(apiUrl);
            if (!response.ok) {
            // Check if the response status is not okay (e.g., 404)
            throw new Error('Network response was not ok');
        }
            let output = await response.json();
            console.log(output);

            // output
            setCourses(output.data);
        }
        catch (error) {
            toast.error("Something went wrong");
            alert("Something went wrong");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="App">
            <Navbar />
            <Filter filterData={filterData} category={category} setCategory={setCategory} />
            {/* 
            // it will give error becoz till now data is not set to courses and it has default value as null
            <Cards courses={courses} /> */}
            {/* <Cards courses={courses} /> */}
            {
                loading ? (< Spinner />) : (<Cards courses={courses} category={category} />)
            }
        </div>
    );
}

export default App;
