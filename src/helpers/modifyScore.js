const modifyScore = (score) => {
  let result = `${score}`;

  if (result.length >= 4) {
    result = score.toLocaleString();
  }

  return `$${result}`;
};

export default modifyScore;
