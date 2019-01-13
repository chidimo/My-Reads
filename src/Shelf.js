import React, { Component } from 'react';

import Book from './Book.js';

class Shelf extends Component {

    render() {

        const {name, books } = this.props
        console.log(name, books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <hr/>

               <div className="bookshelf-books">
                    <ol className="books-grid">
        
                        {
                            books.map((book) => (
                                <Book key={book.id} book={book}/>
                            ))
                        }
                    </ol>
               </div>
            </div>
        )
    }
}

export default Shelf
