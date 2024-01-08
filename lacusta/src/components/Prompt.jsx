import {useState} from 'react';

import Prompt2 from './Prompt2.jsx';
function Prompt({n, m, setN, setM, matrix, setMatrix}) {
    const [firstPromptCompleted, setFirstPromptCompleted] = useState('');

    const submitFirstPrompt = (e) => {
        e.preventDefault();
        setFirstPromptCompleted(true);
    }
    return (
        <div className='prompt'>
            <div className="promptModal">
                {firstPromptCompleted ?
                    <Prompt2 n={n} m={m} setMatrix={setMatrix}/>
                    :
                    <div className="prompt1">
                        <form action="" onSubmit={submitFirstPrompt}>
                            <div className="nInput">
                                <label htmlFor='n'>n =</label>
                                <input
                                    type='number'
                                    value={n}
                                    min={2}
                                    max={10}
                                    id="n"
                                    required
                                    onChange={(e) => setN(Number(e.target.value))}
                                ></input>
                            </div>
                            <div className="mInput">
                                <label htmlFor='m'>m =</label>
                                <input
                                    type='number'
                                    value={m}
                                    min={2}
                                    max={10}
                                    id="m"
                                    required
                                    onChange={(e) => setM(Number(e.target.value))}
                                ></input>
                            </div>
                            <button className="submitPrompt">Trimite</button>
                        </form>
                    </div>
                }
            </div>
        </div>

    )   ;
}
export default Prompt;