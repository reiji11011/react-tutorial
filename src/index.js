import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // 状態を扱うためコンストラクタを設定する。
  constructor(props) {
    // サブクラスのコンストラクタを定義するときはsuperを呼び出す。
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})}
      >
        { this.state.value }
      </button>
    );
  }
}

// どのマス目に何が入っているか？を管理する。
class Board extends React.Component {
  constructor(props){
    super(props);
    // squaresという配列を9つ生成する。
    this.state = {
      squares: Array(9).fill(null),
    }
  };
  // BoardからSquareにpropsとして情報を渡す。
  renderSquare(i) {
    // それぞれのsquareがstateを保持するようにする
    return <Square value={this.state.squares[i]}
    // マス目がクリックされた時にSquareが呼び出すメソッド
    onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

