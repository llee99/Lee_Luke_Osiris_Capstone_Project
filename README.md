## About The Project

The goal of this project was to design a proof of concept ecommerce web application using the MERN stack (MongoDB, Express.js, React, Node.js):

* Users should be able to login, register, browse collections, add items to cart, and checkout, among other features.
* Users data (profile, cart, favorites, etc) is saved to database through auth token

### Built With
Back End:
* MongoDB Atlas
* Express with Mongoose, bcrypt, jwt, cors
* GET /api/cart api/product/:id
* POST /api/cart api/product/:id
* PUT api/product/:id
* DELETE /api/product:id

Front End:
* React, React Router Dom, Redux
* Tailwind CSS classes


## Getting Started

Please use the following link to clone this project: https://github.com/llee99/Lee_Luke_Osiris_Capstone_Project.git

Once downloaded, navigate to /osiris_frontend and run "npm start" in the terminal

To start the Express server, open a separate terminal and navigate to the osiris_backend 

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install 
   ```
3. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin https://github.com/llee99/Lee_Luke_Osiris_Capstone_Project.git
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
