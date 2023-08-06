import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import LoadingPostDetails from "./loading";

export default async function PostsPage({params}){
  let {postId} = params;

  return (
    <div className="flex flex-col items-center">
      <h1 style={{textAlign: "center", fontSize: "1.5rem", marginTop:"20px"}}>Post Details</h1>

      <Suspense fallback={<LoadingPostDetails/>}>
        <PostDetails postId={postId}/>
      </Suspense>
      
    </div>
  )
}