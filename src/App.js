import React from 'react';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './Shelf';
import Search from './Search';
import NoMatch from './NoMatch'

class App extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({books: books})
        });
    }

    moveBook = (shelf, book) => {
        BooksAPI.update(book, shelf)
        .then(bookIds => { // update the local bboks state
            const newBooks = this.state.books.slice()
            for (let b of newBooks) {
                if (b.id === book.id) {
                    book.shelf = shelf
                }
            }
            this.setState({books: newBooks})
        })
    }

    render() {

        const { books } = this.state
        const shelves = ['currentlyReading', 'wantToRead', 'read']

        return (
            <div>
                <Route exact path='/' render={() => (
                    <div>
                        <div className='list-books-title'>
                            <h1>Chidi's Reads</h1>
                        </div>
                        <div className='list-books-content'>
                            {
                                shelves.map((shelf) => (
                                    <Shelf 
                                        key={shelf}
                                        books={books}
                                        shelf={shelf}
                                        shelf_code_name={shelf}
                                        book_mover={(shelf, book) => this.moveBook(shelf, book)} // pass down the book moving function
                                    />
                                ))
                            }
                        </div>
                        <Link to="/search"><div className="open-search">Search</div></Link>
                    </div>
                    )}
                />

                <Route path="/search" render={({ history }) => (
                    <Search home_shelf={books} book_mover={(shelf, book) => this.moveBook(shelf, book)}/>
                )}
                />

                <Route component={NoMatch} />
          </div>
        )
    }
}

export default App
