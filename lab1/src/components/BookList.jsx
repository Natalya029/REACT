import BooksCard from './BooksCard';

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BooksCard
          key={book.id}
          title={book.title}
          img={book.img}
          body={book.body}
        />
      ))}{' '}
    </>
  );
};
export default BookList;