import React from 'react'
import './Filter.css'

function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className='filter'>
            {filterData.map((data) => {
                return <button className={`${category === data.title ? "border-white" : "border-black"
                    }`}  onClick={() => filterHandler(data.title)} key={data.id}>
                { data.title }
                </button>
            })}
        </div >
    )
}

export default Filter;


