import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  .title{
    align-items: center;
    justify-content: center;
    
    font-size: 3rem;
  }
  .board{
    display: grid;
    grid-template-columns: repeat(3, 15rem);
    grid-template-rows: repeat(3, 15rem);
    gap: 1rem;
    
    top: 7rem;
  }
  .board.game-over{
    opacity: 0.3;
  }
  .cell{
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: .5rem;
    font-size: 5rem;
    font-weight: bold;
    color: #00000066;
    cursor: pointer;
  }
  .cell:not(.O):not(.X):hover{
    box-shadow: 0 0 .5rem .1rem white;
  }
  .cell.O, .cell.X, .game-over .cell{
    cursor: not-allowed;
  }
  .cell.O{
    background-color: ${({theme}) => theme.COLORS.BOLA_O};
  }
  .cell.X{
    background-color: ${({theme}) => theme.COLORS.XIS_X};
  }

  footer{
    text-align: center;
    text-align: center;
    height: .1rem;
  }
  .winner-message{
    margin: 2rem;
  }
  .winner-message span.O{
    color: ${({theme}) => theme.COLORS.BOLA_O};
    opacity: 0.7;
  }
  .winner-message span.X{
    color: ${({theme}) => theme.COLORS.XIS_X};
    opacity: 0.7;

  }
  p{
    margin: 1rem;
    text-align: center;
    font-size: 1.5rem;
  }
  p span{
    font-size: 2rem;
    border-bottom: 1px solid white;
  }
  button{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: white;
    border: none;
    border-radius: .5rem;
    box-shadow: 0 0 .5rem .2rem white;
    padding: .2rem;
  }
`