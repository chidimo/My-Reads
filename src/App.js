import React from 'react';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './Shelf';
import Search from './Search';

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            // console.log("abc ", books)
            this.setState({books: books})
        });
    }

    // Call the getAll method. This affects performance but
    // it seems to be the only way, since the update function
    // returns an object, each holding an array of book ids
    // Is there any other way to get the updated books array?
    moveBook = (shelf, book) => {
        BooksAPI.update(book, shelf)
        BooksAPI.getAll()
        .then((books) => {
            this.setState({books: books})
        });
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
                    <Search book_mover={(shelf, book) => this.moveBook(shelf, book)}/>
                )}
                />
          </div>
        )
    }
}

export default BooksApp
