import React from "react"
import BlogPost from "./BlogPost"
import data from "../data"

export default function BlogList() {
    const blogPost = data.map(item => {
        return (
            <BlogPost 
                key={item.id}
                {...item}
            />
        )
    })
    console.log(blogPost)
    return (
        <div className="blog-list">
            {blogPost}
            <a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
        </div>
    )
}