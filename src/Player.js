
   import {Container, Card} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap/dist/react-bootstrap';

export default function Player ({name="Player name",team="Team Name",nationality= "No natioanality", jerseyNumber="XX",age="XX",image="noface.png",teamFlg ,flag}){
    const divider = {
        backgroundColor: '#2E2C5D',
        width: '14rem',
        height:'0.2rem',
        borderRadius: '2rem',
        marginTop: '1rem',
        marginBottom: '2.5rem',
        marginLeft:'auto',
        marginRight:' auto',
    }
    return (
// 
    <Card className="border border-2 shadow  rounded" style={{ width: '18rem', marginTop:"3rem"}}>
        <Container style={{marginTop:"2rem"}}>
             <Card.Img variant="top" src={require(`./images/${image}`)} style={{width:"16rem", height:"14rem",borderRadius:"50%"}}  />
        </Container>

      <Card.Body>

        <Card.Title><span style={{fontSize:"5rem"}} >{jerseyNumber}</span> {name} </Card.Title>
         
         <div style={divider}></div>  
        
        <Card.Text>Age : {age} </Card.Text>

        <Card.Text className="d-flex " >
            <div class="w-100">  Nationality : {nationality}</div>
            <Card.Img src={require(`./images/${flag}`)}style={{width:"1.5rem", height:"1.5rem"}}  />
        </Card.Text>


        <Card.Text  className="d-flex " >
            <div class="w-100">  Team : {team} </div>
            <Card.Img  src={require(`./images/${teamFlg}`)} style={{width:"2rem", height:"2rem"}}/> 
        </Card.Text>    
        

            
                   
            

            
       

               
        
      </Card.Body>
    </Card>
 
    )
}




