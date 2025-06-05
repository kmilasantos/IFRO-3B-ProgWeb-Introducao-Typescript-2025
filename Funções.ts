// === FUNÇÕES ===

//Função Tradicional
function saudacao(nome: string): string{
    return `Olá, ${nome}`
}
console.log(saudacao('Camila'));

//Arrow function
const soma = (x: number, y:number): number => x + y;
console.log('soma:', soma(2,3))

//Função com valor padrão
function mensagem(texto: string = 'Bem-vindo(a)!'){
    console.log(texto);
}

//Função com parâmetro opcional
function apresentar(nome?: string){
    if (nome){
        console.log(`Olá, ${nome}`);

    }else{
        console.log('Olá, visitante.');
    }
}