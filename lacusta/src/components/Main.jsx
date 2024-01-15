import {useState, useEffect} from 'react';

import Grid from './Grid.jsx';

function Main({n, m, matrix}) {
    const [pozitii, setPozitii] = useState('');
    const [suma, setSuma] = useState(0);
    useEffect(() => {
        calculate();
        console.log(pozitii);
    }, [])

    const restart = () => {
        window.location.reload(false);
    }
    const calculate = () => {
        let minim = Array(n + 1);
        for (let i = 1; i <= n; i++)
            minim[i] = Array(m + 1).fill(Number.MAX_SAFE_INTEGER);

        for (let i = 1; i <= m; i++) minim[2][i] = matrix[1][1] + matrix[1][i] + matrix[2][i];
        minim[2][1] = Number.MAX_SAFE_INTEGER;

        console.log(matrix);
        for (let i = 3; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                minim[i][j] = matrix[i][j] + matrix[i - 1][j];
                let min = Number.MAX_SAFE_INTEGER;
                for (let k = 1; k <= m; k++)
                    if (minim[i - 1][k] < min && k != j) {min = minim[i - 1][k];}
                minim[i][j] += min;
            }
        }let min = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i < m; i++) if (min > minim[n][i]) min = minim[n][i];

        let nr = 1;
        let p = Array(n);
        let Min = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i <= m; i++) {
            if (minim[n][i] < Min) {
                Min = minim[n][i];
                p[1] = i;
            }
        }

        let caut = minim[n][p[1]] - matrix[n][p[1]] - matrix[n - 1][p[1]];

        for (let i = n - 1; i >= 2; i--) {
            nr++;
            for (let j = 1; j <= m; j++) {
                if (caut == minim[i][j] && j != p[nr - 1]) {
                    p[nr] = j;
                }
            }
            caut = minim[i][p[nr]] - matrix[i][p[nr]] - matrix[i - 1][p[nr]];
        }

        p = p.reverse();
        console.log(p);
        let pNew = Array(2 * m);
        pNew[1] = [1, 1];
        let numar = 2;
        for (let i = 1; i < n; i++) {
            pNew[numar++] = [i, p[i - 1]];
            pNew[numar++] = [i + 1, p[i - 1]];
        }
        pNew[numar++] = [n, m];
        setPozitii(pNew);
    }

    return (
        <div className='main'>
           {pozitii && 
           <>
                <Grid n={n} m={m} matrix={matrix} pozitii={pozitii} suma={suma} setSuma={setSuma}/>
                <div className="controls">
                    <div className="suma">Sumă: {suma}</div>
                    <button onClick={restart} className="restart">Restart</button>
                </div>
            </>
           }
        </div>
    )
}
export default Main;