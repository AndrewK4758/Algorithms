let input = []

function processData(input) {
    const S = [];
    let lastAnswer = 0;
    const inputArray = input.split("\n");
    const N = inputArray[0].split(" ")[0];
    for (let i = 0; i < N; i++) {
      S[i] = [];
    }
    inputArray.slice(1).forEach((el) => {
      const [q, x, y] = el.split(" ").map(Number);
      const seq = (x ^ lastAnswer) % N;
      switch (q) {
        case 1:
          S[seq].push(y);
          break;
        case 2:
          const size = S[seq].length;
          const index = y % size;
          lastAnswer = S[seq][index];
          console.log(lastAnswer);
          break;
      }
    });
    console.log(S)
    return S;
  }
processData()