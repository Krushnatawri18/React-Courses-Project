import React, { useState } from 'react'
import Card from './Card';
import './Cards.css'

function Cards(props) {
    // console.log(props.courses);
    const [likedCourses, setLikedCourses] = useState([]);
    let courses = props.courses;
    // courses = [];
    let category = props.category;

    // converts all objects of object data into single array
    const getCourses = () => {
        if (category === "All") {
            // to get only values of object
            // flow => data -> for each loop on values of each key(business(not this keys),...) 
            // eg. data =[
            // => for each on value of values of each key(title: 'Marketing..',)
            // business : [{}, {}, {}, {}] we want objects(each course) of this array, no need of key business,...
            // lifestyle : [{}, {}, {}, {}]
            // ]

            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            // returning specific cards of that category
            return courses[category];
        }
    }

    return (
        <div className='cards'>
            {
                (courses.length === 0) ? (<div className="no-courses"><h2>No courses Found</h2></div>) : (
                    getCourses().map((course) => {
                        return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                    })
                )

            }
        </div>
    )
}

export default Cards;