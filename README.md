# Cat Cat Blog
![](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

- Next.js 
- Headless Wordpress

## Local Dev

- Create a .env File in root with following Variables:
```bash
IP=127.0.0.1
DB_ROOT_PASSWORD=password
DB_NAME=wordpress
```
- Run docker-compose up to start the wordpress container
- Wordpress automatically uses the data stored in wp-data ( you can run export.sh to store the current
database in wp-data)
- Run the next.js server with 
```bash
yarn dev
```
