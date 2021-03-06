import React from 'react';
import './Categories.css';

const Categories = props => {


    function handleChange(value) {

        props.search(value);
    }
    

    return (
        <div className="col-3">
            <form id="search-wrapper" className="input-group mb-3">
                <input id="searchInput" className="form-control" type="search" onChange={(e) => handleChange(e.target.value)} placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                    <button id="searchSubmit" className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
            <div className="card">
                <h6 className="card-header">
                    ID - Categories
                </h6>
                <ul id="category-list" className="list-group">
                {props.categories.map(result => {
                    //console.log(result);
                    let classNum = result.class;
                    return (
                        <button className="bg-danger" 
                        onClick={() => {
                            props.click({classNum})
                            props.setRef()
                            }
                        }
                         key={classNum}>
                            {result.class} - {result.category}
                        </button>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
