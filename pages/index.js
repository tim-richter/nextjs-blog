import React, { Fragment } from 'react'
import WPAPI from 'wpapi'
import config from '../config/config'
import { getAllPostsForHome } from "../lib/api";

const wp = new WPAPI({ endpoint: config.url })

export default function Index({ posts, allPosts }) {
  return (
      <Fragment>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            posts.map( post => {
              return (
                <li key={ post.id }>{ post.title.rendered }</li>
              )
            })
          }
        </ul>
      </Fragment>
  )
}

export async function getStaticProps({ preview = false }) {
  const response = await wp.posts();
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: {
      posts: response,
      allPosts: allPosts
    }
  }
}
