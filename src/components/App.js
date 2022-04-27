import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList 
      posts={blogData.posts}
      // id={blogData.id}
      // title={blogData.title}
      // date={blogData.date}
      // prev={blogData.preview}
      />
    </div>
  );
}

export default App;
