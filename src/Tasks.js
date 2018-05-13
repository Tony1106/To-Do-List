const uuidv4 = require('uuid/v4');

let tasks = [
  {
    id: uuidv4(),
    name: "Tien di choi voi ba chua chene aha ha ",
    Priority: 2 //0: low, 1: medium, 2: high
  },
  {
    id: uuidv4(),
    name: "Thu di choi voi ba chua chene aha ha sa asd asd asda sdsa das sasd asd asda sd asd asd sadsa dsad sad asd asd asda asd asd asdsadas dasda sd asda ",
    Priority: 1 //0: low, 1: medium, 2: high
  },
  {
    id: uuidv4(),
    name: "Hai di choi voi ba chua chene aha ha ",
    Priority: 0 //0: low, 1: medium, 2: high
  },
  {
    id: uuidv4(),
    name: "Hoan thanh xong viec rua chen ",
    Priority: 2 //0: low, 1: medium, 2: high
  },
]
export default tasks;
