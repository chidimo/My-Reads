import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './Shelf';

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
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
                <div className='list-books-title'>
                    <h1>Chidi's Reads</h1>
                </div>

                <div className='list-books-content'>
                    {
                        shelves.map((shelf) => (
                            <Shelf key={shelf} shelf_code_name={shelf} books={books} shelf={shelf}/>
                        ))
                    }
                </div>
          </div>
        )
    }
}

export default BooksApp
