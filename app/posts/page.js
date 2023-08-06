import Todo from "../components/todo";
import Link from "next/link";

export default async function PostsPage(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next:{
      revalidate: 120
    }
  });
  let posts = await response.json();
  const postsJsx = posts.map(post =>{
    return(
      <div className="page_posts">
        <h2>{post.title}</h2>
        <p className="post_body">{post.body}</p>
        <Link href={`/posts/${post.id}`}>view more</Link>
      </div>
    )
  }) 
  return (
    <div className="flex flex-col items-center">
      <h1 style={{textAlign: "center", fontSize: "1.5rem", marginTop:"20px"}}>Posts Page</h1>
      <div className="posts_wrapper">
        {postsJsx}
      </div>
    </div>
  )
}