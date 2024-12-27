# Movie Lobby Service

An API server for a movie lobby for OTT applications.

## Application Setup

The server is built with `yarn`. 

```
$ yarn          // Install dependencies
$ yarn start    // Start server
```

Or the application is containerized with [Docker](https://www.docker.com/), and can run with `docker-compose`

```
$ docker-compose up --build     // Running the application with MongoDB setup

$ docker-compose down           // Terminating the application
```

## API Documentation

The server involes 5 APIs for simple movie data operation.

- `GET /movies`:            List all the movies in the lobby
- `GET /search?q={query}`:  Search for a movie by title or genre
- `POST /movies`:           Add a new movie to the lobby (requires "admin" role)
- `PUT /movies/:id`:        Update an existing movie's information (title, genre, rating, or streaming link)
- `DELETE /movies/:id`:     Delete a movie from the lobby (requires "admin" role)

### GET /movies

Retrieve all movie info.

```json
// Response
[
    {
        "_id": "676de345ff36dec663a4e9c7",
        "title": "Movie1",
        "genre": "Drama",
        "rating": 9,
        "createdAt": "2024-12-27T08:14:13.196Z",
        "updatedAt": "2024-12-27T08:14:13.196Z",
        "__v": 0
    },
    ...
]
```

### GET /search?genre=Thrill

Search movies with `title` or `genre`.

```json
// Response
[
    {
        "_id": "676de353ff36dec663a4e9c9",
        "title": "Movie2",
        "genre": "Thrill",
        "rating": 9,
        "createdAt": "2024-12-27T08:14:27.690Z",
        "updatedAt": "2024-12-27T08:14:27.690Z",
        "__v": 0
    }
]
```

### POST /movies

Insert new movie info.

```json
// Payload
{
    "title": "Movie3",
    "genre": "Anime",
    "rating": 9
}
```

### PUT /movies/:id

Update movie attribute including title, genre, rating, and streaming link with given ID.

```json
// Payload
{
"title": "Movie2",
"genre": "Drama"
}
```

### DELETE /movies/:id

Delete specific movie info.

```json
// Response
{
    "_id": "676de345ff36dec663a4e9c7",
    "title": "Movie1",
    "genre": "Drama",
    "rating": 9,
    "createdAt": "2024-12-27T08:14:13.196Z",
    "updatedAt": "2024-12-27T08:14:13.196Z",
    "__v": 0
}
```

## Testing the application

Testing for movie service with `yarn test`. Used [Jest](https://jestjs.io/) library.