

function ContaConfirmada() {

    if (window.location.pathname === '/confirmado') {
        fetch('http://localhost:8080/registrandoConta/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('Conta criada com sucesso!');
                } else {
                    console.log('Erro ao criar conta.');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    return (
        <>
            Conta criada com sucesso
        </>
    );
}

export default ContaConfirmada;