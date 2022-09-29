import React from "react";
import Card from 'react-bootstrap/Card';

const Personajes = ({ personaje, texto } ) => { 

    
    return(
        <div className="cardContainer">
            { texto.length!==0 ?
            (
            <div >
                {
                    personaje.length!==0 ? 
                    <div className="cardContainer">
                        {
                            personaje.map((x)=>(
                            <div>
                                <Card style={{ width: '18rem',height:'30rem' }}>
                                    <Card.Img variant="top" src={x.image} />
                                    <Card.Title className='titleCard'>{x.name}</Card.Title>
                                    <Card.Body className="card">
                                        <Card.Text> Specie - {x.species}</Card.Text>
                                        <Card.Text>Gender - {x.gender} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                        }
                    </div>
                    :
                    <div >
                        <h1> No coinciden resultados con  "{texto}" </h1>
                    </div>
                }
            </div>
            ) : (
                <> 
                    <img  className="img-fluid imgDefecto" src="https://i.pinimg.com/originals/b4/47/89/b447897cb9570fd1239a1f1368d2c054.png" />
                </>
            )
            }
        </div> 
    )
}

export default Personajes;