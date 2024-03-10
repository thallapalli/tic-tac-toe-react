import { useState } from "react";
export default function Player({ initailaName, symbol }) {
  const [playerName,setPlayerName]=useState(initailaName);
  const [isEditing, setEditing] = useState(false);
  
  function handleEditClick() {
    setEditing((editing)=>!editing);
  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption='Edit';

  if (isEditing) {
    editableplayerName = <input type="text"  required value={playerName} onChange={handleChange}/>;
    buttonCaption='Save'
  }
  return (
    <li>
      <span className="player">
        {editableplayerName}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
      </span>
    </li>
  );
}
