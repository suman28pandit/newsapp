import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
    constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state = {
          articles: [],
          loading: false
      }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3bcaeefead03426291f378ba62191485";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});

  }

  render() {
      return (
          <div className="container my-3">
              <h2>NewsUpdates - Top Headlines</h2>
              <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url} imageUrl={element.urlToImage} />
                    </div>
                })}

                    </div>     
                    </div>   
      )}
} 
      
export default News;