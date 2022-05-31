
import { useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksCard from './components/BooksCard';
import Navbar from './components/Navbar';





function App() {

const [books] = useState([
  {
    id: 1,
    title: 'Book 1',
    img: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.'
  },
  {
    id: 2,
    title: 'Book 2',
    img: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.'
  },

  {
    id: 3,
    title: 'Book 3',
    img: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.'
  }
])

  return (
    
      <div className="cont">
       <Navbar/>
        { books.map(book => (
          <BooksCard key={book.id} title={book.title} img={book.img} body={book.body} />
        )) }
      </div>
      

 )
}
    
  

export default App;
