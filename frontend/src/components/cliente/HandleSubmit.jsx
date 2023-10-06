function HandleSubmit({ constDados }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            constDados
        };

        try {
            console.log(dados);

            const response = await fetch('SUA_API_URL_AQUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            const data = await response.json();
            console.log('Resposta da API:', data);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };
}

export default HandleSubmit;