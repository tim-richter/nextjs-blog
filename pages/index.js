import React, { Fragment } from 'react'
import axios from 'axios'

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
  const response = await axios.get( 'http://127.0.0.1//wp-json/wp/v2/posts' )

  return {
    props: {
      posts: response.data
    }
  }
}
