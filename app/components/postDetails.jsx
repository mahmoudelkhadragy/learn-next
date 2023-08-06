export default async function PostDetails({postId}) {

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, 2000);
  });

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next:{
      revalidate: 120
    }
  });
  let post = await response.json();
  return(
    <div className="posts_wrapper">
      <div className="page_posts">
        <h2>{post.title}</h2>
        <p className="post_body">{post.body}</p>
      </div>
    </div>
  )
}