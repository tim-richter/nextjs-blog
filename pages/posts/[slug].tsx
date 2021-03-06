import React from 'react'
import styled from 'styled-components'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import Layout from "../layouts/layout";

interface Props {
  data: getPostAndMorePostsResponse
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Post({ data }: Props) {
  return (
    <Layout>
      <Title>{data.post.title}</Title>
      <small>
        Kategorien:
        {data.post.categories.edges.map( category => category.node.name)}
      </small>
      { data.post?.featuredImage?.node?.sourceUrl && <img src={data.post.featuredImage.node.sourceUrl} alt={data.post.featuredImage.node.altText} style={{ width: 500}} /> }

      <section dangerouslySetInnerHTML={{ __html: data.post.content}} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false, params }) {
  const data = await getPostAndMorePosts(params.slug, false, null)

  return {
    props: {
      data
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
