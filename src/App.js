import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './Shelf';

class BooksApp extends React.Component {

    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({books: books})
        });
    }

    render() {

        const { books } = this.state

        // console.log(JSON.stringify(this.state))

        const shelves = ['Currently Reading', 'Want to Read', 'Read']
        return (
            <div>
                <div className='list-books-title'>
                    <h1>My Reads - Chidi Orji</h1>
                </div>

                <div className='list-books-content'>
                    {
                        shelves.map((shelf) => (
                            <Shelf key={shelf} name={shelf} books={books}/>
                        ))
                    }
                </div>
          </div>
        )
    }
}

export default BooksApp
