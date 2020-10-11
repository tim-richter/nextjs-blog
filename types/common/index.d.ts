type categories = {
  edges: {
    node: {
      name: string;
      slug: string;
    }
  }[]
}

type author = {
  node: {
    name: string;
  }
}

type featuredImage = {
  node: {
    sourceUrl: string;
    altText: string;
  }
}

type tags = {
  edges: {
    node: {
      name: string;
    }
  }[]
}

type getPostAndMorePostsResponse = {
  post: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    content: string;
    categories: categories
    author: author
    featuredImage: featuredImage
    tags: tags
  }
  posts: {
    edges: {
      node: {
        title: string;
        excerpt: string;
        slug: string;
        date: string;
        categories: categories
        author: author
        featuredImage: featuredImage
        tags: tags
      }
    }[]
  }
}


