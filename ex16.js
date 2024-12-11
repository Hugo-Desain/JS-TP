const analyserPhrase = (sentence) => {
  const words = sentence.split(" ");

  const totalWords = words.length;

  acc = "";
  const longestWord = words.reduce(
    (acc, word) => (word.length > acc.length ? word : acc),
    acc
  );

  const occurrences = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const obj = {
    totalWords: totalWords,
    longestWord: longestWord,
    occurrences: occurrences,
  };

  return console.log(obj);
};

analyserPhrase(
  "C'est le puissant pouvoir Du pouvoir de la puissance C'est la puissance du pouvoir C'est un pouvoir puissant Le pouvoir de la puissance C'est la puissance du pouvoir"
);
