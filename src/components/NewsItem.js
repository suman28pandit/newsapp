import React, { Component } from 'react'
//API KEY 04f8e70122e04e1ebd2c0ab9464a53c1

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'


                    }}>
                <span className="badge rounded-pill bg-primary" style={{ left: '70%', zIndex: '1' }}> {source}
                    </span></div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
            </div >
        )
    }
}

export default NewsItem