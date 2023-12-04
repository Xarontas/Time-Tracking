import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileUser from './ProfileUser';
import Item from './Item';
import './App.css';
import Footer from './Foooter';
import '../public/data.json'
import { useState, useEffect } from 'react';


const endpoint = 'data.json'

function App() {

  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false)
  const [monthly, setMonthly] = useState(false)

  const [hours, setHours] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    (async () => {
      try {
        setIsLoading(true)
        const data = await fetch(endpoint)
          .then(res => res.json())

        setHours(data)

      } catch (e) {
        console.log("error:", (e as Error).message);
        setError(true);
      } finally {
        setIsLoading(false)
      }
    })
      ()
  }, [])


  return (
    <>
      <Container>
        <Row>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: "center", marginTop: '40px' }}>
            <Col md={3}>
              <ProfileUser setDaily={setDaily} setWeekly={setWeekly} setMonthly={setMonthly} />
            </Col>


            <Col md={9}>
              <div >
                <Item daily={daily} weekly={weekly} monthly={monthly} hours={hours} error={error} isLoading={isLoading} />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
