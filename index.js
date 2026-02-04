const feriados2025 = [
    '2025-01-01', '2025-03-03', '2025-03-04', '2025-04-18', 
    '2025-04-21', '2025-05-01', '2025-06-19', '2025-09-07', 
    '2025-10-12', '2025-11-02', '2025-11-15', '2025-11-20', '2025-12-25', 
];

function verificarHorario(dataHora) {
    const data = new Date(dataHora);
    const diaSemana = data.getDay(); 
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const tempoAtualEmMinutos = hora * 60 + minutos;
    
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;
    
    if (feriados2025.includes(dataFormatada)) {
        return "FORA do horário de funcionamento por ser feriado.";
    }
    
    if (diaSemana === 0 || diaSemana === 6) {
        return "FORA do horário de funcionamento (Fim de semana).";
    }
    
    let inicio = 8 * 60;
    let fim;
    
    if (diaSemana >= 1 && diaSemana <= 4) { 
        fim = 20 * 60;
    } else if (diaSemana === 5) { 
        fim = 19 * 60;
    }
    
    if (tempoAtualEmMinutos >= inicio && tempoAtualEmMinutos < fim) {
        return "DENTRO do horário de funcionamento.";
    } else {
        return "FORA do horário de funcionamento.";
    }
}

const agora = new Date();
console.log(`Data/Hora: ${agora.toLocaleString('pt-BR')}`);
console.log(`Resultado: ${verificarHorario(agora)}`);

