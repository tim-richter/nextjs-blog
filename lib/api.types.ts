export module Types {
    export type getPostAndMorePostsResponse = {
        post: {
            title: string;
            excerpt: string;
            slug: string;
            date: string;
            content: string;
            categories: {
                edges: {
                    node: {
                        name: string;
                    }
                }[]
            }
            author: {
                node: {
                    name: string;
                }
            }
            featuredImage: {
                node: {
                    sourceUrl: string;
                }
            }
            tags: {
                edges: {
                    node: {
                        name: string;
                    }
                }[]
            }
        }
        posts: {
            edges: {
                node: {
                    title: string;
                    excerpt: string;
                    slug: string;
                    date: string;
                    categories: {
                        edges: {
                            node: {
                                name: string;
                            }
                        }[]
                    }
                    author: {
                        node: {
                            name: string;
                        }
                    }
                    featuredImage: {
                        node: {
                            sourceUrl: string;
                        }
                    }
                    tags: {
                        edges: {
                            node: {
                                name: string;
                            }
                        }[]
                    }
                }
            }[]
        }
    }
}


