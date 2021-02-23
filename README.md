# Flickshare App
The Flickshare App is directed for anyone who really has a hard time finding suggestions on what to watch next! The app allows users to create an account and custom lists of movie interests, which may then be used to generated a list of suggestions and store them for coming back to it later.

This API stop represents a way for the app to communicate with the list of users, movie lists and movies. The user data contains full name, email, username, password and admin privileges. The list data contains a name and an associated user.

---
### Working Prototype
#### Client Live:
https://flickshare-client.vercel.app

#### API URL
https://cryptic-badlands-24275.herokuapp.com

#### API GitHub:
https://github.com/dionisggr/flickshare-api

---

### User Stories
- As a prospective user
  - I am landed in the Welcome Page
  - I can see the week's top movie suggestions per category
  - I can navigate to the Register and Login pages
  - I can see more information about a movie
- As a registered user
  - I can create and name a list
  - I can search for a movie to select for a list
  - I can search, edit and delete my list
  - I can browse top public lists
  - I can see more information about a movie
- As an Admin
  - I can see, edit and delete users
  - I can see and add movies
  - I can see, edit and delete lists
  - I can reset user suggestion lists

---

### Technology
* **Front-End:** React.js, CSS3, HTML5, Javascript, API fetch
* **Back-End:** Javascript, Node.js, Express.js, Knex.js, PostgreSQL, Mocha, Chai, Supertest, Nodemon, Postgrator, Dotenv, JWT, Bcrypt, Morgan, XSS, CORS, Helmet, HTML5, CI scripts
* **Development Environment:** Heroku, DBeaver, Postman

---

### Wireframes

Welcome Page
:-------------------------:
![Welcome Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/welcome.png)

Login Page
:-------------------------:
![Login Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/login.png)

Register Page
:-------------------------:
![Register Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/register.png)

Home Page
:-------------------------:
![Home Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/user-homepage.png)

User Lists
:-------------------------:
![User Lists](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/user-lists.png)

List Page
:-------------------------:
![List Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/welcome.png)

Suggestions Page
:-------------------------:
![Suggestions Page](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/suggestions.png)

All Users Page
:-------------------------:
![All Users Page (Admin)](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/admin-users.png)

All Lists Page
:-------------------------:
![All Lists Page (Admin)](https://github.com/dionisggr/flickshare-client/blob/main/public/wireframes/admin-lists.png)

---

### Functionality
The app's functionality includes:
* Every User
  * May create an account
  * May browse public suggestion lists
  * May read full movie information
* Registered User
  * May edit and delete their account
  * May create, edit and delete their lists
  * May generate suggestions from other lists
  * May search for any movie
* Admin
  * May see a list of all users
    * May create, edit and delete any user
  * May see a list of all lists
    * May create, edit and delete any list
    
---

### Front-End Structure
* __Index.js__ - (stateless)
    * __App.js__ - (stateful)
      * __Header.js__ - (stateless)
      * __MainMenu.js__ - (stateless)
      * __Register.js__ - (stateless)
      * __Login.js__ - (stateless)
      * __WelcomePage.js__ - (stateful)
          * __Login.js__ - (stateful)
          * __Register.js__ - (stateful)
      * __Lists.js__ - (stateful)
      * __List.js__ - (stateful)
      * __Suggestions.js__ - (stateful)
      * __Movie.js__ - (stateful)
        * __MoviePreview.js__ - (stateful)
          * __MovieOptions.js__ - (stateful)
      * __MovieSearch.js__ - (stateful)
      * __Admin.js__ - (stateful)
        * __Users.js__ - (stateful)
      * __User.js__ - (stateful)
        * __UserPreview.js__ - (stateless)
      * __UserEdit.js__ - (stateful)
      * __Error.js__ - (stateless)
      * __ErrorBoundary.js__ - (stateful)
      * __Footer.js__ - (stateless)

---

### Back-End Structure
- Users (database table)
  - user_id (integer, auto-generated)
  - first_name (text, not null)
  - last_name (text, not null)
  - email (text, unique)
  - username (text, unique)
  - password (text, hashed)
  - admin (boolean, default false)
- Lists (database table)
  - list_id (integer, auto-generated)
  - name (text, not null)
  - user_id (integer, optional)
- Movies (database table)
  - movie_id (integer, auto-generated)
  - name (text, not null)
  - tmdb_id (integer, id from tmdb API)
  - description (text, maximum 150 characters)
  - release_date (text, not date)
  - popularity (numeric, decimal)
  - poster (text, poster image URL)
  - avg_vote (numeric)
  - vote_count (integer)
- List Movies (database table)
  - list_id (references lists.list_id)
  - movie_id (references movies.movie_id)

---

## API Documentation

### Endpoints that require Authentication
Closed endpoints that require a valid username and password to be included in the header body of the request.

#### Login

- Step 1: *(Generate JSON Web Token)*
  - `POST /api/login`
    - 'Admin' credentials
      - Username: `admin`
      - Password: `password`
- Step 2: &lt;*Use generated JSON Web Token (3 hrs)*&gt;
- Step 3 *(Optional): Refresh JSON Web Token*
  -  `POST /api/token`

### Endpoints that require Authorization
Closed endpoints that require a valid JSON Web Token to be inlcuded in the header 'Authorization' of the request.
```
// Add to request header
headers: {'Authorization': 'Bearer <JSON Web Token>'}
```
If sending content through request body (`POST`), don't forget to add the following in the headers:
```
// Add to request header
headers" {'Content-Type': 'application/json'}
```

### User related
Each endpoint manipulates information related to users.
- [Create User (Register)](https://github.com/dionisggr/flickshare-api/wiki/Users): `POST /api/users`
- [Get User](https://github.com/dionisggr/flickshare-api/wiki/Users): `GET /api/users/:user`
- [Edit User](https://github.com/dionisggr/flickshare-api/wiki/Users): `PATCH /api/users/:user`
- [Delete User](https://github.com/dionisggr/flickshare-api/wiki/Users): `DELETE /api/users/:user`

#### Get Users
**URL:** `/api/users` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer my-secret-admin`

##### Success Response
**Code:** `200 OK` \
**Content example**
```
[
  {
    "username": "dschrute",
    "first_name": "Dwight",
    "last_name": "Schrute",
    "email": "schrutefarms@creedmail.com",
    "admin": false
  },
      
  ...
]
```

---

#### Create User *(Register)*
**URL:** `/api/users` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
  {
  "username": "rhoward",
  "password": "password",
  "first_name": "Ryan",
  "last_name": "Howard",
  "email": "commited@wuphf.com",
  "admin": false
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `username`      | string  | header | Unique username           |
| `password`      | string  | header | User password             |
| `first_name`    | string  | header | First name of user        |
| `last_name`     | string  | header | Last name of user         |
| `email`         | string  | header | User email                |
| `admin`         | boolean | header | Admin privileges          |

##### Success Reponse
**Code:** `201 Created` \
**Content example**
```
{
  "user_id": 4
  "username": "rhoward",
  "first_name": "Ryan",
  "last_name": "Howard",
  "email": "commited@wuphf.com",
  "admin": false
}
```

---

#### Edit User
**URL:** `/users/:userID` \
**Method:** `PATCH` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  // All optional, at least one required.
  "username": "rhoward",
  "first_name": "Ryan",
  "last_name": "Kapoor", // Edited
  "email": "taken@wuphf.com", // Edited
  "admin": false
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `user`          | integer | path   | User ID                   |
| `username`      | string  | header | Unique username           |
| `first_name`    | string  | header | First name of user        |
| `last_name`     | string  | header | Last name of user         |
| `email`         | string  | header | User email                |
| `admin`         | boolean | header | Admin privileges          |

##### Success Reponse
**Code:** `201 Created` *(Resource updated successfully, and refreshes.)* \
**Content example**
```
{
  "user_id": 4
  "username": "rhoward",
  "first_name": "Ryan",
  "last_name": "Kapoor",
  "email": "taken@wuphf.com",
  "admin": false
}
```
##### Notes
All values will be necessary in Update due to previous empty field validation

---

#### Delete User
**URL:** `/users/:user` \
**Method:** `DELETE` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>` *(Generated at Login. See above for instructions)*

| Name            | Type    | In     | Description      |
| ----------------| ------- | ------ | ---------------- |
| `user`          | integer | path   | User ID          |

##### Success Reponse
**Code:** `301 Moved Permanently` \
**Content example**

&lt;*No Content*&gt;


### List related
Each endpoint manipulates information of general and user lists.
- [Get Main Lists](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists/main` \
*(General suggestion/category lists not associated to users)*
- [Create List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `POST /api/lists`
- [Get List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists/:list`
- [Edit List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `PATCH /api/lists/:list`
- [Delete List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `DELETE /api/lists/:list`


### Movie related
Each endpoint manipulates information related to movie data.
- [Get All Movies](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies`
- [Add Movie to Database](https://github.com/dionisggr/flickshare-api/wiki/Movies): `POST /api/movies`
- [Get Movie](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies/:movie`

#### Get All Movies
**URL:** `/api/movies` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Success Reponse
**Code:** `200 OK` \
**Content example**
```
[
  {
    "movie_id": 1,
    "name": "Man of Steel",
    "description": "Come on, it's Man of Steel.",
    "tmdb_id": 99999,
    "releaste_date": 2013,
    "popularity": 987.72
    "avg_vote": 7.4,
    "vote_count": 9,876
    "poster": "https://image.tmdb.org/t/p/original/manofsteel.jpg",
  },
      
  ...
]
```

---

#### Get Movie
**URL:** `/api/movies/:movie` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Success Reponse
**Code:** `200 OK` \
**Content example**
```
[
  {
    "movie_id": 1,
    "name": "Man of Steel",
    "description": "Come on, it's Man of Steel.",
    "tmdb_id": 99999,
    "releaste_date": 2013,
    "popularity": 987.72
    "avg_vote": 7.4,
    "vote_count": 9,876
    "poster": "https://image.tmdb.org/t/p/original/manofsteel.jpg",
  },
      
  ...
]
```

---

#### Add Movie to Database
**URL:** `/api/movies` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  "name": "The Dark Knight",
  "description": "No description necessary.",
  "tmdb_id": 99998,
  "release_date": 2008,
  "popularity": 985.27
  "avg_vote": 6.9,
  "vote_count": 8,517
  "poster": "https://image.tmdb.org/t/p/original/thedarkknight.jpg"
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `name`          | string  | header | Name of project           |
| `description`   | string  | header | Description of project    |
| `tmdb_id`       | string  | header | Languages/Tools required  |
| `release_date`  | string  | header | Project Phase             |
| `popularity`    | string  | header | Project Phase status      |
| `avg_vote`      | string  | header | Creator of project        |
| `vote_count`    | string  | header | Date created              |
| `poster`        | boolean | header | Accepts collaboration     |

##### Success Reponse
**Code:** `201 Created` \
**Content example**
```
{
  "movie_id": 2,
  "name": "The Dark Knight",
  "description": "No description necessary.",
  "tmdb_id": 99998,
  "releaste_date": 2008,
  "popularity": 985.27
  "avg_vote": 6.9,
  "vote_count": 8,517
  "poster": "https://image.tmdb.org/t/p/original/thedarkknight.jpg"
}
```

---

#### Add Movie to List
**URL:** `/api/movies/lists/:list` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  "movie_id": 1
}
```
| Name            | Type    | In     | Description         |
| ----------------| ------- | ------ | ------------------- |
| `list`          | integer | path   | List ID             |
| `movie_id`      | integer | header | Movie ID            |

##### Success Reponse
**Code:** `201 Created` \
**Content example**

&lt;*No Content*&gt;

---

#### Delete Movie
**URL:** `/api/movies/:movie` \
**Method:** `DELETE` \
**Auth required:** Yes
- `Bearer my-secret-admin`

| Name            | Type    | In     | Description       |
| ----------------| ------- | ------ | ----------------- |
| `movie`         | integer | path   | Movie ID          |

##### Success Reponse
**Code:** `301 Moved Permanently` \
**Content example**

&lt;*No Content*&gt;

---

#### Delete List Movie
**URL:** `/api/movies/:movie/lists/:list` \
**Method:** `DELETE` \
**Auth required:** Yes
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

| Name            | Type    | In     | Description       |
| ----------------| ------- | ------ | ----------------- |
| `movie`         | integer | path   | Movie ID          |
| `list`          | integer | path   | List ID           |

##### Success Reponse
**Code:** `301 Moved Permanently` \
**Content example**

&lt;*No Content*&gt;


### Movie-List related
Each endpoint manipulates information related to the movies in lists.
- [Get List Movies](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies/lists/:list`
- [Add Movie to list](https://github.com/dionisggr/flickshare-api/wiki/Movies): `POST /api/movies/lists/:list`
- [Delete Movie from list](https://github.com/dionisggr/flickshare-api/wiki/Movies): `DELETE /api/movies/:movie/lists/:list`

#### Get All Lists
**URL:** `/api/lists` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Success Response
**Code:** `200 OK` \
**Content example**
```
[
    {
    "list_id": "1",
    "name": "Admin list",
    "user_id": 1,
    "movies": [...]
  },
  {
    "list_id": "2",
    "name": "Top Rated",
    "user_id": null,
    "movies": [...]
  }
      
  ...
]
```

---

#### Get Main Lists
**URL:** `/api/lists/main` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Success Response
**Code:** `200 OK` \
**Content example**
```
[
    {
    "list_id": "2",
    "name": "Top Rated",
    "user_id": null,
    "movies": [...]
  },
  {
    "list_id": "3",
    "name": "Popular",
    "user_id": null,
    "movies": [...]
  }
      
  ...
]
```

---

#### Create List
**URL:** `/api/lists` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  "name": "New List Name",
  "user_id": 1  // Optional
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `name`          | string  | header | Name of list              |
| `user_id`       | integer | header | Description of list       |

##### Success Response
**Code:** `201 Created` \
**Content example**
```
{
  "list_id": 3,
  "name": "New List Name",
  "user_id": 1
}
```

---

#### Edit List
**URL:** `/api/lists/:list` \
**Method:** `PATCH` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  "name": "New Name"
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | ------------------------- |
| `list`          | integer | path   | List ID                   |
| `name`          | string  | header | Name of list              |

##### Success Response
**Code:** `201 Created` *(Resource updated successfully, and refreshes.)* \
**Content example**
```
{
  "list_id": 3,
  "name": "New Name",
  "user_id": 2
}
```
##### Notes
All values will be necessary in Update due to previous empty field validation

---

#### Delete List
**URL:** `/api/lists/:list` \
**Method:** `DELETE` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

| Name            | Type    | In     | Description        |
| ----------------| ------- | ------ | ------------------ |
| `list`          | integer | path   | LIst ID            |

##### Success Response
**Code:** `301 Moved Permanently` \
**Content example**

&lt;*No Content*&gt;


### Access / Token related
Each endpoint manipulates information related access / token management.
- [Login](https://github.com/dionisggr/flickshare-api/wiki/Access-Permission): `POST /api/login`
- [Register](https://github.com/dionisggr/flickshare-api/wiki/Users): `POST /api/users`
- [Refresh JWT Token](https://github.com/dionisggr/flickshare-api/wiki/Access-Permission): `PATCH /api/token`

#### Login
**URL:** `/api/login` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`

####### Request Body
```
{
  "username": "admin",
  "password": "password",
}
```

| Name       | Type    | In     | Description       |
| -----------| ------- | ------ | ----------------- |
| `username` | string  | header | Unique username   |
| `password` | string  | header | User password     |

##### Success Response
**Code:** `200 OK` \
**Content example**
```
{
  "flickshareToken": &lt;JSON Web Token&gt;
}
```

---

#### Refresh Token
**URL:** `/api/token` \
**Method:** `GET` \
**Auth required:** Yes
- `Bearer <JSON Web Token>`

##### Success Response
**Code:** `200 OK` \
**Content example**
```
{
  "flickshareToken": &lt;JSON Web Token&gt;
}
```

---

#### Registration
**URL:** `/api/users` \
**Method:** `POST` \
**Auth required:** Yes
- `Bearer my-secret-key`
- `Bearer my-secret-admin`
- `Bearer <JSON Web Token>`

##### Request Body
*Requires `headers: {'Content-Type': 'application/json'}`*
```
{
  "username": "rhoward",
  "password": "password",
  "first_name": "Ryan",
  "last_name": "Howard",
  "email": "commited@wuphf.com",
  "admin": false
}
```
| Name            | Type    | In     | Description               |
| ----------------| ------- | ------ | --------------------- |
| `username`      | string  | header | Unique username       |
| `password`      | string  | header | User password         |
| `first_name`    | string  | header | First name of user    |
| `last_name`     | string  | header | Last name of user     |
| `email`         | string  | header | User email            |
| `admin`         | string  | header | Admin privileges      |

##### Success Response
**Code:** `201 Created` \
**Content example**
```
[
  {
    "user_id": "4"
    "username": "rhoward",
    "first_name": "Ryan",
    "last_name": "Howard",
    "email": "commited@wuphf.com",
    "admin": false
  },
  
  ...
]
```

#### Admin related
Each endpoint manipulates information related to all data, only able to be accessed by an Admin user. __Admins can manipulate all previous endpoints as well.__
- [Get All Users](https://github.com/dionisggr/flickshare-api/wiki/Users): `GET /api/users`
- [Get All Lists](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists`

---

### Screenshots

Welcome Page
:-------------------------:
![Welcome Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/welcome.png)

Login Page
:-------------------------:
![Login Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/login.png)

Register Page
:-------------------------:
![Register Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/register.png)

Home Page
:-------------------------:
![Home Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/home.png)

User Page
:-------------------------:
![User Lists](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/user.png)

User Lists
:-------------------------:
![User Lists](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/user-lists.png)

User List
:-------------------------:
![User List](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/user-list.png)

List Edit
:-------------------------:
![List Edit](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/user-list-edit.png)

List Page
:-------------------------:
![List Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/list.png)

Suggestions Page
:-------------------------:
![Suggestions Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/suggestions.png)

Movie Search Page
:-------------------------:
![Movie Search Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/movie-search.png)

---

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
- Implementation of movie likes
- Implementation of list likes
- Sending movie-list suggestions
- Copy other user's lists

---

## Local Dev Set Up
Start a database server with `pg_ctl start`.

If using user `admin`:

```bash
mv example.env .env
createdb -U admin flickshare
createdb -U admin flickshare-test
```

If your `admin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=flickshare-test npm run migrate
```

To start the application, use `npm start`. Tests will run automatically. \
Alternatively, to run development mode, use `npm run dev`. Tests will not run.

To seed the database: `psql -U admin -d flickshare -f ./seeds/seed.flickshare.sql`.

And `npm test` should work at this point.

### Configuring Postgres
For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

---