document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const pais = document.getElementById('pais').value;
    const comentarios = document.getElementById('comentarios').value;

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Dados Enviados:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;

    document.querySelector('h1').innerText = "Formulário Enviado com Sucesso!";
    
    // Mudar a cor de fundo para lightgray
    document.querySelector('form').style.backgroundColor = 'lightgreen';
    
    // Limpar o formulário
    document.getElementById('formulario').reset();
});

