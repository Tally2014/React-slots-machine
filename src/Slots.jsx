import React from 'react'

function Slots({val1, val2, val3}) {
    const isMatched = val1 === val2 && val1 === val3;
    const styles = {color: isMatched? "green": "red"};
  return (
    <div>
        <h1>{val1} {val2} {val3}</h1>
        {isMatched? <h2 style={styles}>You win!</h2>: <h2 style={styles}>You lose</h2>}
        {isMatched && <h3>Congrats!!!</h3>}
    </div>
  )
}

export default Slots