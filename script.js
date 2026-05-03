// ==========================
// B.1. DEFINIÇÃO DOS DADOS
// ==========================

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: true
    },
    {
        id: 3,
        titulo: "Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["ação"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção", "terror"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "O Poderoso Chefão",
        tipo: "filme",
        ano: 1972,
        generos: ["crime", "drama"],
        nota: 9.2,
        assistido: false
    },
    {
        id: 6,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia"],
        nota: 8.8,
        assistido: true
    }
];


// ==========================
// B.2. ACESSO AOS DADOS
// ==========================

console.log("Catálogo completo:", catalogo);

// primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// último item
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

// segundo gênero do terceiro item
if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item não possui um segundo gênero.");
}


// ==========================
// B.3. ITERATORS
// ==========================

// A) forEach
console.log("Lista de títulos:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em maiúsculo:", titulosEmCaixaAlta);


// C) filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade não assistidos:", naoAssistidos.length);


// D) find
const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log("Primeiro com nota >= 9:", notaAlta.titulo, notaAlta.nota);
} else {
    console.log("Nenhum item com nota >= 9");
}


// E) reduce

// média geral
const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

// média assistidos
const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));


// F) some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);


// ==========================
// B.4. SAÍDA NO DOM
// ==========================

const output = document.getElementById("output");

// contagem
const total = catalogo.length;
const filmes = catalogo.filter(i => i.tipo === "filme").length;
const series = catalogo.filter(i => i.tipo === "serie").length;

// ranking top 3
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

output.innerHTML = `
    <h3>Resumo do Catálogo</h3>
    <p>Total de itens: ${total}</p>
    <p>Filmes: ${filmes} | Séries: ${series}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral: ${mediaGeral.toFixed(2)}</p>

    <h4>Top 3</h4>
    <ul>
        ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
    </ul>
`;