export const randomNumber = (min, max, qtd = 1) => {
  const result = [];

  for (let i = 0; i < qtd; i++) {
    result.push(Math.floor(Math.random() * max + min));
  }

  return result;
};

export const randomWord = (listWord = [], qtd = 1) => {
  let listLength = listWord.length;

  if (listLength < qtd) throw new Error('A quantidade de palavras sorteadas não pode ser maior que a enviada');

  const result = [];

  for (let i = 0; i < qtd; i++) {
    const indice = Math.floor(Math.random() * listLength + 1) - 1;
    result.push(listWord[indice]);
    listLength--;
    listWord.splice(indice, 1);
  }
  return result;
};
