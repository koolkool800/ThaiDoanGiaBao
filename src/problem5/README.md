# Book Management API

This API provides functionality to manage and retrieve information about books. It includes endpoints to create, read, update, and delete books with features like pagination, sorting, and searching.

## Business requirements

- [x] Create a book
- [x] Get a book
- [x] Update a book
- [x] Delete a book
- [x] Get list of books
- [x] Search books by title or author
- [x] Sort books by price, createdAt, updatedAt, id, title, author
- [x] Paginate books

## Set up

1. Clone the repository

```sh
git clone git@github.com:koolkool800/ThaiDoanGiaBao.git
```

2. Navigate to the project directory

    ```sh
    cd ThaiDoanGiaBao/src/problem5
    ```

3. Install all dependencies

    ```sh
    npm install
    ```

4. Install and set up database

If you haven't installed Docker, please install Docker from the following [here](https://docs.docker.com/engine/install/)

Set up database with Docker

```
docker compose up -d
```

## Launching locally

5.  Run migrations

        ```sh
        npm run build
        npm run migration:run
        ```

Note: you can check the package.json file for more commands
If you want to create a migration

```sh
npm run migration:create --name=<file_name>
```

If you want to revert:

```sh
npm run migration:revert
```

6. Start the project in development mode

    ```bash
    npm run dev
    ```

7. Format code
    ```bash
    npm run format
    ```

## Swagger Documentation

To view the OpenAPI documentation, launch the server and access:
http://localhost:3000/api-docs

## API Endpoints

1. Get List of Books
   Description: Retrieves a paginated list of books.

    `GET /api/books`
    Query Parameters:

    - pageIndex (number): The page number (default: 0)
    - pageSize (number): Items per page (default: 10)
    - q (string): Search query for title or author
    - sort (enum): Field to sort by (price, createdAt, updatedAt, id, title, author)
    - order (enum): Sort order (ASC, DESC)

2. Get Book by ID
   Description: Retrieves a specific book by ID.

    `GET /api/books/:id`

3. Create Book
   Description: Creates a new book.

    `POST /api/books`
    Required fields:

    - title (string, min length: 2)
    - author (string)
    - price (number)
      Optional fields:
    - description (string)

4. Update Book
   Description: Updates an existing book.

    `PUT /api/books/:id`
    Optional fields:

    - title (string)
    - author (string)
    - description (string)
    - price (number)

5. Delete Book
   Description: Deletes a book by ID.

    `DELETE /api/books/:id`

## Environment variables

| Name | Default Value | Description |
| ---- | ------------- | ----------- |
| PORT | 3000          | API Port    |

```

```
