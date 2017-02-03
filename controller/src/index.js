export function outcome(question, session) {

  return new Promise((resolve) => {
    var correct = (session.answer === question.answer);
    resolve({
      score: {
        scaled: correct ? 1 : 0
      }
    });
  });

}

export function model(question, session, env) {

  return new Promise((resolve) => {
    resolve(question);
  });

}