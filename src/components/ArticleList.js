import Article from "./Article"

function ArticleList(props) {
    const posts = props.posts.map((post) =>{
        console.log(post)
        return (<Article  key={post.id}
                id={post.id} 
                title={post.title} 
                date={post.date}
                preview={post.preview}
                mins={post.minutes}
                />)
    })
  return (
    <main>
        {posts}
    </main>
  )
}

export default ArticleList