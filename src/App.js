import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

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

        console.log(JSON.stringify(this.state))

        const shelves = ['Currently Reading', 'Want to Read', 'Read']
        return (
          <div>
              <div className='list-books-title'>
                <h1>My Reads - Chidi Orji</h1>
              </div>

                {
                    shelves.map((shelf) => (
                        <h2 key={shelf}>{shelf}</h2> // render shelf here
                    ))
                }
          </div>
        )
    }
}

export default BooksApp
