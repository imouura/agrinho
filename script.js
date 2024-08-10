function verificarResposta(respostaId, respostaCertaId) {
    var respostaUsuario = document.getElementById(respostaId).value.trim().toLowerCase();
    var respostaCerta = document.getElementById(respostaCertaId).textContent.trim().toLowerCase();

    var todasRespostas = document.querySelectorAll('.resposta');
    todasRespostas.forEach(function(resposta) {
        resposta.style.display = 'none';
    });

    if (respostaUsuario.includes(respostaCerta)) {
        document.getElementById(respostaCertaId).style.display = 'block';
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}
