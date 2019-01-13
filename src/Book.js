import React, { Component } from 'react';

class Book extends Component {

    state = {
        status: ""
    };

    render() {

        const { book } = this.props

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                    </div>ct>
                    </div>
                    <div className="book-title">{book.title}</div>

                    {
                        book.authors.map((author) => (
                            <div className="book-authors">{author}</div>
                        ))
                    }
                </div>
            </li>
        );
    };
}

export default Book
