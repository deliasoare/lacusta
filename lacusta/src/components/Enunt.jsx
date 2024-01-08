
function Enunt({setEnuntClicked}) {
    return (
        <div className="enuntContainer" onClick={(e) => {if (e.target.className === "enuntContainer") setEnuntClicked(false)}}>
            <div className="enuntModal">
                <div className="enuntClose" onClick={() => setEnuntClicked(false)}>X</div>
                <div className="enuntContent">
                    Se consideră o matrice dreptunghiulară cu m linii şi n coloane, cu valori naturale. Traversăm matricea pornind de la colţul stânga-sus la colţul dreapta-jos. O traversare constă din mai multe deplasări. La fiecare deplasare se execută un salt pe orizontală şi un pas pe verticală. Un salt înseamnă că putem trece de la o celulă la oricare alta aflată pe aceeaşi linie, iar un pas înseamnă că putem trece de la o celulă la celula aflată imediat sub ea. Excepţie face ultima deplasare (cea în care ne aflăm pe ultima linie), când vom face doar un salt pentru a ajunge în colţul dreapta-jos, dar nu vom mai face şi pasul corespunzător. Astfel traversarea va consta din vizitarea a 2m celule.
                <br></br>
                <br></br>
                Scrieţi un program care să determine suma minimă care se poate obţine pentru o astfel de traversare.
                </div>
            </div>
        </div>
    );
}

export default Enunt;