

function Article({id, title, date="January 1, 1970", preview, mins}) {
    console.log(preview)
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article