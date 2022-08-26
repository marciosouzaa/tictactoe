import {Container} from './styles'
import


export function Game() {
  

  return (
    <Container className="game">     
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>      
    </Container>
  )
}