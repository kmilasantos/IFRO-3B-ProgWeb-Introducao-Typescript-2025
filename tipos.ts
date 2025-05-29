//=== TIPOS EM TYPESCRIPT ===

//Tipos primitivos
let texto: string = 'Olá, mundo!';
let numero: number = 42;
let ativo: boolean = true;

//Array
let numeros: number[] = [1,2,3];
let palavras: Array<string> = ["Typescript","é","massa!"];

//Tuplas
let pessoa: [string, number] = ['Camila', 28]

//Enum -- enunciado
enum Cores{
    Verde,
    Azul,
    Rosa
}

let corFavorita: Cores = Cores.Rosa;

//Any (evitar sempre que possível)
let dadoAleatorio: any = 5;
dadoAleatorio = "texto";
dadoAleatorio = true;

//Unknown (tipo mais seguro que any)
let dadoDesconhecido: unknown = 10;

//Void
function mostrarAlerta() : void{
    console.log("Atenção! Preste atenção na aula");
}

//Null e undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem: string) : never{
    throw new Error(mensagem)
}

//Aliases -- apelidos
type Usuario = {
    nome: string;
    idade: number;
}

let usuario1: Usuario = { nome:'Camila', idade: 28 }

