import { NextPage } from "next";
import { useState } from "react";
import BlogHandler from "../../utils/backend/BlogHandler";
import BlogInterface from "../../utils/backend/BlogPostInterface";

const blogHandler = new BlogHandler();

const BlogList : NextPage = () => {
    
    const [posts, setPosts] = useState<BlogInterface[]>();
    const [page, setPage] = useState<Number>(1);

    const updatePage = async (page:number) => {
        setPosts(await blogHandler.fetchLatest(page));
        console.log(posts);
    }

    const createDebugPost = async () => {
        await blogHandler.createPost("Ben", "Test Post", "This is my test post");
        updatePage(1);
    }

    updatePage(1);

    return <section>
         <button onClick={createDebugPost}>Create Test Post</button>

         { posts ? 
         posts.map((post, index) => {
            return (<div>
                {post.title}
            </div>);
         }) :
        (<div></div>)}
    </section>;
}

export default BlogList;