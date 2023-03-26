import React from 'react'

export const Item = ({ item }) => {
    return (

        <div className="card" style={{ width: '18rem',margin: '12px' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.author}</h5>
                <p className="card-text">{item.description}</p>
                <div class="card-footer">
                    <small class="text-muted">{item.source}</small>
                </div>
                <a href={item.url} className="btn btn-sm btn-primary" style={{ margin: '12px' }}>Read more</a>
            </div>
        </div>
    )
}