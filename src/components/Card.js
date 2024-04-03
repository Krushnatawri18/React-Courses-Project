import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import './Card.css'

function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // already liked course
            // setting new liked courses & removing like of current card component
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed successfully");
            console.log("Like removed");
        }
        else {
            // not liked already
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
                console.log("Like added");
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
                console.log("Like added");
            }
            toast.success("Liked successfully");
        }
    }

    return (
        <div className='card'>
            <div className="card-img">
                <img src={course.image.url} />
                <div>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.5rem" />) : (<FcLikePlaceholder fontSize="1.5rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className="card-description">
                <h3>{course.title}</h3>
                <p>{
                    course.description.length > 100 ? (course.description.substr(0, 100) + "..."): (course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card