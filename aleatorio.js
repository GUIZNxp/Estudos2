const nomes = ["Gabriel", "Guilherme", "Davi", "Daniel", "Thiago", "Vitor", "Kauã"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)