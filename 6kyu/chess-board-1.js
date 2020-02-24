const findColor = cell => {
  const boardColor = [["A", "C", "E", "G"], ["1", "3", "5", "7"], ["B", "D", "F", "H"], ["2", "4", "6", "8"]]
   
  if ((boardColor[0].includes(cell[0]) &&
      boardColor[1].includes(cell[1])) || 
      (boardColor[2].includes(cell[0]) &&
      boardColor[3].includes(cell[1])) ) {
      return "DARK"
  } else {
    return "LIGHT"
  }
}

const chessBoardCellColor = (cell1, cell2) => findColor(cell1) === findColor(cell2)

chessBoardCellColor("A1","A2")