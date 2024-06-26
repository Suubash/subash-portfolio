import Link from "next/link";
import React from "react";
import { Header } from "../components";
import { getPosts } from "../data";
import { Layout } from "../layouts";
import { useState } from "react";

function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogPosts = posts.filter((post) =>
    post.node.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Layout
      title="Blog - Subash Chaudhary"
      description="Want to know advanced topics on Front-end development? You are in the right place. You can find different blogs covering advanced topics on front-end development."
    >
      <Header
        title="Blogs"
        paragraphs="Explore a diverse array of programming-related topics through my collection of blogs. Delve into the intricacies of front-end development, discover insights on UI designs, and navigate the ever-evolving landscape of technology. Engage with thought-provoking content that transcends conventional boundaries, fostering a deeper understanding of the programming realm."
        searchbar={{ placeholder: "Search Blogs..." }}
        changeSearch={(search) => setSearchTerm(search)}
      />
      <div className="py-20 max-w-custom space-y-10 md:space-y-20">
        <div className="flex flex-col gap-10">
          <h1>All Blog Posts</h1>
          <div className="flex flex-col gap-2">
            {filteredBlogPosts
              .map((post, index) => (
                <Link key={index} href={`/blog/${post.node.slug}`} passHref>
                  <div className="bg-secondary dark:bg-secondary_dark border border-neutral-200 dark:border-neutral-700 p-4 sm:p-8 rounded-md hover:opacity-80 cursor-pointer transition-all ">
                    <span className="md:text-xl font-bold">
                      {post.node.title}
                    </span>
                    <p className="mt-2 opacity-70">
                      {post.node.metaDescription}
                    </p>
                  </div>
                </Link>
              ))
              .reverse()}
            {!filteredBlogPosts.length && <p>No posts found.</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts: posts,
    },
  };
}
