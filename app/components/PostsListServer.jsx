import React from "react";

export default async function PostsListServer() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return (
        <div>
            <h1>Blog Post (Server)</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
