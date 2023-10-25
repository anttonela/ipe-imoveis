import React, { useEffect, useState } from 'react';

function Teste() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/criarConta/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);


    return (
        <div>
            {data ? (
                <div>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Teste;
