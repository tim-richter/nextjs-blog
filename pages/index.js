import React, { Fragment } from 'react'
import WPAPI from 'wpapi'
import config from '../config/config'

const wp = new WPAPI({ endpoint: config.url })

export default function Index({ posts }) {

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

export async function getStaticProps() {
  const response = await wp.posts();

  return {
    props: {
      posts: response
    }
  }
}
