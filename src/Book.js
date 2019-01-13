import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI';

class Book extends Component {

    moveBook = (shelf) => {
        BooksAPI.update(this.props.book, shelf)
    }

    render() {

        const { book } = this.props

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => this.moveBook(e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>

                    {
                        book.authors.map((author) => (
                            <div key={author} className="book-authors">{author}</div>
                        ))
                    }
                </div>
                <p>Temporary variable: {book.shelf}</p>
            </li>
        );
    };
}

export default Book
