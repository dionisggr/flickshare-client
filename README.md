# Flickshare App
The Flickshare App is directed for anyone who really has a hard time finding suggestions on what to watch next! The app allows users to create an account and custom lists of movie interests, which may then be used to generated a list of movie suggestions and store them for coming back to it later.

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
* **Development Environment:** Vercel, Heroku, DBeaver, Postman

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

### Screenshots

Welcome Page
:-------------------------:
![Welcome Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/welcome.png)

Login Page
:-------------------------:
![Login Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/login.png)

Signup Page
:-------------------------:
![Signup Page](https://github.com/dionisggr/flickshare-client/blob/main/public/screenshots/signup.png)

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
