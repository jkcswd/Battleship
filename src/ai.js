const ai = {
  moveList: [],

  clearMoveList: () => {
    ai.moveList.splice(0, ai.moveList.length) // Clears the actual array rather than new array or leaving in memory
  },

  checkMove: (x, y) => {
    return ai.moveList.every(i => (i.x !== x) || (i.y !== y))
  },

  computerTurn: () => {
    let validMoveFound = false

    while (!validMoveFound) {
      const x = Math.ceil(Math.random() * 10) // ceil to avoid rounding down to zero
      const y = Math.ceil(Math.random() * 10)

      if (ai.checkMove(x, y)) {
        validMoveFound = true
        ai.moveList.push({ x, y })
        return { x, y }
      }
    }
  }
}

// TODO: Make better AI with hunt/target and parity

export default ai
