import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
  <div style={{backgroundColor:'orange' , height:'990px'}}> <div > <Card className='absolute5'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/new2.webp" />
      <Card.Body>
        <Card.Title style={{color:'blue'}}>MEDICAL EDUCATION
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>

    <Card className='absolute2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/new3.jpg" />
      <Card.Body>
        <Card.Title  style={{color:'red'}}>HEALTH INFORMATIONS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Click here</Button>
      </Card.Body>
    </Card>

    <Card  className='absolute3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/new1.webp" />
      <Card.Body>
        <Card.Title  style={{color:'green'}}>MEDICAL PROFESSIONALS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>

    <Card  className='absolute4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/new5.jpg" />
      <Card.Body >
        <Card.Title  style={{color:'yellow'}}>RESEARCH</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Click here</Button>
      </Card.Body>
    </Card>
    <Card  className='absolute11' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/04.jpg" />
      <Card.Body >
        <Card.Title  style={{color:'purple'}}>HEATHCARE SYSTEM</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Click here</Button>
      </Card.Body>
    </Card>
    
    <Card  className='absolute12' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/03.jpg" />
      <Card.Body >
        <Card.Title  style={{color:'green'}}>HEALTHCARE BOARDS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
     <Card  className='absolute13' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/02.webp" />
      <Card.Body >
        <Card.Title  style={{color:'orange'}}>HEALTH MANAGEMENT</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Click here</Button>
      </Card.Body>
    </Card>
    
    <Card  className='absolute14' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/o1.jpg" />
      <Card.Body >
        <Card.Title  style={{color:'blue'}}>HEALTH INDUSTRY</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Home
