
//import { Container} from 'react-bootstrap';
import Player from './Player';
import players from './players';



const PlayerList = ()=>{
    const FifaPlayers = players.map(el =>{
            return <Player name={el.name}  team={el.team} nationality={el.nationality}  jerseyNumber={el.jerseyNumber} 
            image={el.image} age={el.age}
            teamFlg={el.teamFlg} flag={el.flag}/>})
    return(
        
            <div className = 'd-flex justify-content-evenly'>
            {FifaPlayers}
            </div>
       
    )
};

export default PlayerList;