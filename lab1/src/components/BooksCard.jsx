import React from 'react'
import {CardGroup, Card, Button } from 'react-bootstrap'



const BooksList = (book) => {
  return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src="{book.img}"/>
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
       {book.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Button size="sm">More about..</Button>
    </Card.Footer>
  </Card>
  
</CardGroup>
  
  )
}

export default BooksList