import React, { Fragment } from 'react'
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts }) {
  return (
      <Fragment>
        <h1>Our Posts Page!</h1>
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
