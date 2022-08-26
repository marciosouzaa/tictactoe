import {Container} from './styles'
import {Square} from '../Square'


export function Board() {
  const status = 'Next player: X';

  return (
    <Container>
      
        <div className="status">{status}</div>
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
        </div>
      
    </Container>
  )
}