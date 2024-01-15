import { useState, useEffect } from 'react';

import Lacusta from '../assets/lacusta.svg';

function Grid({n, m, matrix, pozitii, suma, setSuma}) {

    
    const [widthCelula, setWidthCelula] = useState('');
    const [heightCelula, setHeightCelula] = useState('');
    useEffect(() => {
        const el = document.querySelector('#j1');
        setWidthCelula(el.offsetWidth);
        setHeightCelula(el.offsetHeight);

        
        let lacusta = document.querySelector('.lacusta');
        console.log(lacusta.offsetHeight, el.offsetHeight);
        if (lacusta.offsetHeight > el.offsetHeight) {
            lacusta.style.height = el.offsetHeight / 2;
        }
        lacusta.style.left = `${el.offsetWidth / 4}px`;

    }, [])

    useEffect(() => {
        let lacusta = document.querySelector('.lacusta');
        let delay = 0;
        let pozX = widthCelula / 4;
        let pozY = 0 ;
        let currentSuma;
        setSuma(0);
        pozitii.forEach((poz, index) => {
            const row = (document.querySelectorAll(`.i${poz[0]}`));
            let el;
            row.forEach(cell => {
                if (cell.id == `j${poz[1]}`)
                    el = cell;
            })
            if (index == 1) {
                currentSuma = matrix[poz[0]][poz[1]];
                setSuma(currentSuma);
            }
            el.style.animationDelay = `${delay}ms`;
            if (index > 1) {
                lacusta.style.animationPlayState = 'paused';
            
                setTimeout(() => {
                    lacusta.style.animationPlayState = 'running';
            
                    pozX += widthCelula * (poz[1] - pozitii[index - 1][1]);
                    pozY += heightCelula * (poz[0] - pozitii[index - 1][0]);
            
                    lacusta.style.left = `${pozX}px`;
                    lacusta.style.top = `${pozY}px`;
            
                    currentSuma += matrix[poz[0]][poz[1]];
                    setSuma(currentSuma);
                }, 3000 * (index - 1));
            
            }
            delay += 3000;
        })
    }, [widthCelula, heightCelula])

    return (
        <div className="grid">
            <div className="lacusta">
                <img src={Lacusta} alt="" />
            </div>
            {Array.from({ length: n}).map((item, index) => (
                <div className='row' key={index + 1}>
                    {Array.from({length: m}).map((it, ind) => {
                        return (
                            <div key={index + ind + 1} className={`cell i${index + 1} ${pozitii.some(
                                (poz) => poz[0] === index + 1 && poz[1] === ind + 1)? 'animate'
                                : ''}`} 
                            id={`j${ind + 1}`}
                            style = {{}}
                            >{matrix[index + 1][ind + 1]}</div>
                        )
                    })}
                        
                </div>
            ))}
        </div>
    );
}
export default Grid;