# Cat Cat Blog
![](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

- Next.js 
- Headless Wordpress
- GraphQL and REST


## Features

- Instant changes to the content when something changes in the backend (wordpress) without rebuilding
all static pages manually

## Local Dev

- Create a .env File in root with following Variables:
```bash
IP=127.0.0.1
DB_ROOT_PASSWORD=password
DB_NAME=wordpress
```
- And a .env.local File
```.env
WORDPRESS_GRAPHQL_URL=http://127.0.0.1/graphql
NEXT_PUBLIC_WORDPRESS_REST_URL=http://127.0.0.1/wp-json
```
- Run docker-compose up to start the wordpress container
- Wordpress automatically uses the data stored in wp-data ( you can run export.sh to store the current
database in wp-data)
- Run the next.js server with 
```bash
yarn dev
```

## Get into Wordpress Admin

Since this is only a test repo there is only one user registered to enter wp-admin:

Username: Tim.Richter
Password: 1234

## Queries/API Calls

There are 2 main ways to get data from wordpress:

### Wordpress REST API

wpapi is a library that makes working with wordpress's api easy. No further config required.

https://github.com/wp-api/node-wpapi

### GraphQL

Use Queries to get exactly what you need from the backend.
Queries should be created in lib/api.ts

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
fetchAPI is also in lib/api.ts and just sends the defined query to the wordpress grapqhl endpoint in the 
correct format.

A Query can also have variables like $id. Those are declared in the second object to "fetchAPI".

If you want to have a look at what's available you can visit the wordpress admin site and go to "GraphiQL" in the sidebar.
Or just use this link: http://127.0.0.1/wp-admin/admin.php?page=wp-graphiql%2Fwp-graphiql.php

## Environment Variables

The .env file is only used by docker for wordpress!

Environment Variables that are used by nextjs should go into .env.local. Next only loads from this file
not .env

By default all environment variables loaded through .env.local are only available in the Node.js environment, 
meaning they won't be exposed to the browser.

In order to expose a variable to the browser you can prefix the variable with NEXT_PUBLIC_. For example:
```.env
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

This loads process.env.NEXT_PUBLIC_ANALYTICS_ID into the Node.js environment automatically so it can be used
everywhere.
