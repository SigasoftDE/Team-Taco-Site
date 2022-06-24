import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import BlogList from "../../components/blog/BlogList";
import Navbar from "../../components/landing/Navbar";
import BlogHandler from "../../utils/backend/blog/BlogHandlerndler";
import BlogInterface from "../../utils/backend/blog/BlogPostgPost";


const BlogListPage = (props:BlogInterface[]) => {
    // is there a better way to implement scripts except for doing it on every page


    console.log("coole seite", props);
    

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

export async function getServerSideProps(ctx:any) {
    const handler = new BlogHandler();
    const data = await handler.fetchLatest(1);

    const filtered = await JSON.parse(JSON.stringify(data));

    return { 
        props: {filtered}
    }
}

export default BlogListPage;