import React from 'react'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import * as ApiTypes from '../../lib/api.types'

interface Props {
  data: ApiTypes.Types.getPostAndMorePostsResponse
}

export default function Post({ data }: Props) {
  return (
    <div>
      Post: {data.post.title}
    </div>
  );
};

export async function getStaticProps({ preview = false, params }) {
  const data = await getPostAndMorePosts(params.slug, false, null)

  return {
    props: {
      data: data
    }
  }
}

export async function getStaticPaths() {
  const allPostSlugs = await getAllPostsWithSlug();

  return {
    paths: allPostSlugs.edges.map( post => {
      return { params: { slug: post.node.slug } }
    }),
    fallback: false
  }
}
