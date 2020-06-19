# Cat Cat Blog
![](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

- Next.js 
- Headless Wordpress
- GraphQL and REST

## Local Dev

- Create a .env File in root with following Variables:
```bash
IP=127.0.0.1
DB_ROOT_PASSWORD=password
DB_NAME=wordpress
WORDPRESS_API_URL=http://127.0.0.1/graphql
```
- Run docker-compose up to start the wordpress container
- Wordpress automatically uses the data stored in wp-data ( you can run export.sh to store the current
database in wp-data)
- Run the next.js server with 
```bash
yarn dev
```

## Queries/API Calls

There are 2 main ways to get data from wordpress:

### Wordpress REST API

wpapi is a library that makes working with wordpress's api easy. No further config required.

https://github.com/wp-api/node-wpapi

### GraphQL

Use Queries to get exactly what you need from the backend.
Queries should be created in lib/api.js

A Query might look like this:
```javascript
const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
```
fetchAPI is also in lib/api.js and just sends the defined query to the wordpress grapqhl endpoint in the 
correct format.

A Query can also have variables like $id. Those are declared in the second object to "fetchAPI".
