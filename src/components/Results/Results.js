import React from 'react';
import './Results.css';


const Results = (props, ref) => {

    const resultImage = {
        display: "block",
        maxWidth:"100px",
        maxHeight:"100px",
        width: "auto",
        height: "auto"
    }
    
     
    return (
        <div className="col" ref={ ref }>
            <div id="result-card"className="card">
                <table className="table table-sm">
                    <thead className="card-header">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Item #</th>
                            <th scope="col" className='description-col'>Description</th>
                            <th scope="col" className='more-info-col'></th>
                        </tr>
                    </thead>
                    <tbody id="category-result">
                    {props.items.map((result, index) => {
                        //console.log(result.image)
                        let itemNum = result.item_no;
                        return (
                            <tr className="product" key={`${result.item_no}-${index}`}>
                                <td className="mx-auto">
                                    <img id="result-img" className="mx-auto" src={result.image} alt="" style={resultImage}></img>
                                </td>
                                <td>{result.item_no}</td>
                                <td className="description-col">{result.item}</td>
                                <td className="more-info-col">
                                    <button className="btn btn-outline-info fa fa-info"  
                                    aria-hidden="true"
                                    aria-label="more info" onClick={() => props.modal({itemNum})}>                                           
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default React.forwardRef(Results);
