import React, { Component } from 'react';

class Shelf extends Component {

    render() {

        const {name, books } = this.props
        console.log(name, books)
        return (
            <div>
                <h2>{name}</h2>
                <hr/>

                {
                    books.map((book) => (
                        <p key={book.id}>{book.title}</p>
                    ))
                }
            </div>
        )
    }
}

export default Shelf
