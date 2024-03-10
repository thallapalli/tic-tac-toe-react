import Player from "./componenets/Player";
import GameBoard from "./componenets/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player  initailaName="Player1" symbol="X" />
          <Player  initailaName="Player2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
