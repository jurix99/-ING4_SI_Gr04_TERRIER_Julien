function Square(props) {
    return (
      <button className="square" onClick={props.onClick}> {/* Return a Button of class square with onclick property */}
        {props.value} {/* Value X or O */}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]} //Use function square to create the button
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() { //Render for the board
      return (
        <div> 
          <div className="board-row"> {/* Create 3 rows with 3 squares */}
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null) //At the begining each squares are null
          }
        ],
        stepNumber: 0, // The step is 0
        xIsNext: true //and X is next
      };
    }
  
    handleClick(i) { //Click on a square
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O"; //If X is the Next, square[i] = X, else square[i] = O
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length, //Number of steps
        xIsNext: !this.state.xIsNext //0 will be the next
      });
    }
  
    jumpTo(step) { //Return to a step
      this.setState({
        stepNumber: step, // Current step = step
        xIsNext: (step % 2) === 0 // If it's an even step, it's the turn of X
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => { // for each moves
        const desc = move ? //If there is a move, it prints 'go to move number', else 'go to game start'
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}> 
            <button onClick={() => this.jumpTo(move)}>{desc}</button> {/*it returns a button with the description and onlick it will uses the function jumpTo*/}
          </li>
        );
      });
  
      let status;
      if (winner) { //If winner == true
        status = "Winner: " + winner; //Return with the function CalculateWinner: X or O
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O"); //Change the sentence in function of the player
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board //Render of the board
              squares={current.squares} //each squares
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info"> {/* Render infos with status and each moves*/}
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root")); //Render in <div id="root">
  
  function calculateWinner(squares) {
    const lines = [ //Arrays of each possibilities for a win
      [0, 1, 2], //first line
      [3, 4, 5], //Second line
      [6, 7, 8], //Third line
      [0, 3, 6], //first Column
      [1, 4, 7], //Second Column
      [2, 5, 8], //Third Column
      [0, 4, 8], //First diag
      [2, 4, 6] //Second Diag
    ];
    for (let i = 0; i < lines.length; i++) { //Try the 9 solutions
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //If each square contain a value and if the 3 have the same value
        return squares[a]; //Return X or O as the winner
      }
    }
    return null;
  }
  