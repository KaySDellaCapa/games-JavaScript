const quantidadeGolpes = parseInt(gets());

let minerais = ["Pedra", " Carvao", "Ferro", "Diamante"]

for (let i = 1; i <= quantidadeGolpes; i++) {
  let minaIndex = i % minerais.length;
  console.log(i + ": " + minerais[minaIndex])
}