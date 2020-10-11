import React from 'react'
import Link from "next/link";
import { getAllPostsForHome } from "../lib/api.ts";

export default function Index({ allPosts }: any) {
  return (
    <>
      <h1>Our Posts Page!</h1>
      <ul>
        { allPosts.edges.map( post => (
          <li key={post.node.slug}>
            {post.node.title}
            <Link href={`/posts/${post.node.slug}`}>
              Meow
            </Link>
          </li>
          ))}
      </ul>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: {
      allPosts
    }
  }
}
