import React from 'react'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import * as ApiTypes from '../../lib/api.types'

interface Props {
  data: ApiTypes.Types.getPostAndMorePostsResponse
}

export default function Post({ data }: Props) {
  return (
    <>
      <h1>{data.post.title}</h1>
      <small>Kategorien: {data.post.categories.edges.map( category => category.node.name)}</small>
      { data.post?.featuredImage?.node?.sourceUrl && <img src={data.post.featuredImage.node.sourceUrl} alt={data.post.featuredImage.node.altText} style={{ width: 500}}/> }

      <section dangerouslySetInnerHTML={{ __html: data.post.content}} />
    </>
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
