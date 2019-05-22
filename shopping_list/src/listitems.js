import React from 'react';


function List(props){
    return(
        <div>
            <p className = "items">Items</p>
            <ol className="item-list">
                {props.list.map((item,index) => <li key = {index}>{item}</li>
                )}
            </ol>
        </div>
    );
}


export default List;