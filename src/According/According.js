import React, {useState} from 'react';
import questions from "./Data";
import Question from './Question';

const According = () => {

    const [infos, setInfos] = useState(questions); 

    return (
        <main>
            <div className='container d-flex flex-column'>
                <h3>questions and answer about login</h3>
                <section className='info'>
                    {
                        infos.map(info => (
                            <Question {...info} key={info.id} />
                        ))
                    }
                </section>
            </div>
        </main>
    );
};

export default According;