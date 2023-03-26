import React, { Component } from 'react'
import { Items } from './List'

export class Container extends Component {
    render() {
        return (
            <div className="container">
                <h2 style={{margin: '12px'}}>RandomNews - Top Headlines</h2>

                <Items />
            </div>
        )
    }
}

export default Container;