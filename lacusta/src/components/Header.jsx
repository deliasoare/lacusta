
function Header({setEnuntClicked}) {

    return (
        <div className='header'>
            <p className="title">Programare dinamică - Lăcustă</p>
            <button onClick={() => setEnuntClicked(true)} className="enunt">Enunț</button>
        </div>
    );
}

export default Header;