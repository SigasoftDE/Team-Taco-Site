import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/landing/Navbar";
import BlogInterface from "../../utils/backend/BlogPostInterface";

const BlogListPage = () => {
    // is there a better way to implement scripts except for doing it on every page
    
    const [posts, setPosts] = useState<BlogInterface>();
    const [page, setPage] = useState<Number>(1);


    return <section id="blogListPage">
        <Head>
            <title>Team taco. | Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" ></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        </Head>

        <Navbar />

       
    </section>
}

export default BlogListPage;