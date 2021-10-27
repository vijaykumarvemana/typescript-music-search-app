import { FormEvent, useEffect, useState } from 'react'
import {Form, Container, Col, Row, ListGroup} from 'react-bootstrap'
import Songs from '../typings/Songs'

const Search = () =>{

    const [query, setQuery] = useState('')
    const [data, setData] = useState<Songs[]>([])
   
   
    // useEffect(()=>{ 
        
    // },[])

    const fetchData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
            if(response.ok){
                let fetchedData = await response.json()
                console.log(fetchedData.data)
                let data:Songs[] = fetchedData.data
                 setData(data)
             }
        } catch (error) {
            console.log(error)
        }
        
    }
 const handleSubmit =(e: FormEvent) =>{
      e.preventDefault()
      fetchData()
  }
    
   

    return(
        <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1> Music Search Engine</h1>
                        <Form onSubmit= {handleSubmit}>
                            <Form.Control type="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="type and press Enter" />
                        </Form>
                    </Col> 
                    <Col xs={10} className='mx-auto mb-5'>
                    <ListGroup>
                        {
                         data.map( song => (<ListGroup.Item className="my-4 p-4">{song.title}</ListGroup.Item>))    
                        }
                            
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
    )
}


export default Search