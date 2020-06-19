import React from 'react'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";

export default function Post({ data }) {
  return (
    <div>
      Post: {data.post.title}
    </div>
  );
};

export async function getStaticProps({ preview = false, params }) {
  console.log(params)
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
