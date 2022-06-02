
import { useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';






function App() {

const [books] = useState([
  {
    id: 1,
    title: 'Book 1',
    img: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=pexels-caio-46274.jpg&fm=jpg',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti.'
  },
  {
    id: 2,
    title: 'Book 2',
    img: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti.'
    
  },

  {
    id: 3,
    title: 'Book 3',
    img: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?cs=srgb&dl=pexels-pixabay-415071.jpg&fm=jpg',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti.'
    
  }
])

  return (
    
      <div className="cont">
       <Navbar book={books.book}/>
       <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <BookList books={books} />
      </div>
        </div>
      

 )
}
    
  

export default App;
