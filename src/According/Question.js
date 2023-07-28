import React from 'react';
import HOC from "./HOC/WithShow";

const Question = (props) => {

    const { title, info, clickHandler, showInfo } = props;

    return (
        <article className='container d-flex flex-column'>
            <header className='d-flex '>
                <h4>{title}</h4>
                <button className={showInfo ? "btn btn-danger" : "btn btn-warning"} onClick={clickHandler}>
                    {showInfo ? "-" : "+"}
                </button>
            </header>
            {showInfo && <p className='shadow p-3 mt-2 rounded '>{info}</p>}
        </article>
    );
};

export default HOC(Question);