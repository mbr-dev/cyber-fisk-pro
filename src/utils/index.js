export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const formatQuestionServer = (question) => {
  if (!question) return;
  return question.replace("\\r\\n", "\n");
};

export const getGameTitle = (numGame) => {
  if (!numGame) return;
  switch (numGame) {
    case 1:
      //Select
      return "Chose the correct word to complete the sentence.";
    case 2:
      //Drag and drop
      return "Drag and drop the correct answer.";
    case 3:
      //listen and click
      return "Listen and choose the correct answer.";
    case 4:
      //Listen and type
      return "Listen and type the answer.";
    case 5:
      //Listen and click map
      return "Listen and choose the correct place on the map";
    case 6:
      //quiz
      return "QUIZ";
    default:
      return "";
  }
};

export const getBookTitle = (numBook) => {
  if (!numBook) return;
  switch (numBook) {
    case 53:
      //Select
      return "Essentials 1";
    default:
      return "";
  }
};
