# Blog API

This is a RESTful API built with Express.js for managing a blog. It provides endpoints for CRUD (Create, Read, Update, Delete) operations on both users and posts.

## Installation

1. Clone this repository:

```bash
git clone git@github.com:jaypee15/node-express-blog-API.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

   Create a `.env` file in the root directory and specify the following variables:

   ```
   PORT=<3000>
   MONGODB_URI=<your-mongodb-uri>
   ```

4. Start the server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Users

- `GET /users`: Get all users
- `GET /users/:id`: Get a single user by ID
- `POST /users`: Create a new user
- `PATCH /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

### Posts

- `GET /posts`: Get all posts
- `GET /posts/:id`: Get a single post by ID
- `POST /posts`: Create a new post
- `PUT /posts/:id`: Update a post by ID
- `DELETE /posts/:id`: Delete a post by ID

### Request and Response Formats

#### User

```json
{
  "username": "user_username",
  "email": "user_email"
}
```

#### Post

```json
{
  "title": "post_title",
  "content": "post_content",
  "author": "post_author_id"
}
```

## Error Handling

- 404 Not Found: If the requested resource is not found.
- 400 Bad Request: If the request is invalid.
- 500 Internal Server Error: If there's a server-side issue.

## Authentication and Authorization

Authentication and Authorization is implemeted through middlewares to protect certain routes using JSON Web Tokens (JWT).

## Technologies Used

- Node.js - JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database for storing data.
- Mongoose: MongoDB object modeling for Node.js.

