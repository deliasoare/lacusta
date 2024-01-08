
function Prompt2({n, m, setMatrix}) {
    let Matrix = Array(n + 1);
    for (let i = 1; i <= n; i++)
        Matrix[i] = Array(m + 1).fill(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        let count = 0;
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                Matrix[i][j] = parseInt(e.target[count].value);
                count++;
        }
        setMatrix(Matrix);
    }
    }
    return (
        <div className="prompt2">
            <form id="inputField" onSubmit={handleSubmit}>
                     {Array.from({ length: n }).map((i, index = 1) => (
                        <div className='row' key={index}>
                          {Array.from({ length: m }).map((it, ind = 1) => (
                            <input required key={ind} type="number" name={`field${index}${ind}`} size={1}/>
                          ))}
                          <br />
                        </div>
                      ))}
            
                    <button> Trimite </button>
                    </form>
        </div>
    )
}
export default Prompt2;