import React, { Fragment } from 'react'
import { getAllPostsForHome } from "../lib/api";
import Link from "next/link";

export default function Index({ allPosts }) {
  return (
      <Fragment>
        <h1>Our Posts Page!</h1>
        <ul>
          { allPosts.edges.map( post => (
            <li key={post.node.slug}>
              {post.node.title}
              <Link href={`/posts/${post.node.slug}`}>Meow</Link>
            </li>
          ))}
        </ul>
      </Fragment>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: {
      allPosts: allPosts
    }
  }
}
