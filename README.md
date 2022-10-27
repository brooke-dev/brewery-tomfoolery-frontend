# Brewery Tomfoolerly Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

In order to run this application you will need to fork and clone this repository as well as its backend counter part (repository found here: [https://github.com/brookeross99/phase-3-sinatra-react-project](https://github.com/brookeross99/phase-3-sinatra-react-project)). After forking and cloning both repositorys run the following commands in the projects directory:  

### `bundle install`

This will install of the files needed to run this application. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

After doing the above, hop over to the back end repository and get that configured with the ReadMe instructions. Once your serer is running you will be able to view and edit the application with front and back end capabilities! 

## About our Application

Welcome to Brewery Tomfoolery: the ultimate brew log for a brewery lover! Spend your days documenting the best of the best brews through the Add a new Brew form(found on our home page). This application is not only a diary for the brewery lover, but also interactive-- you will be able to access entries that have been made by other users as well. Navigate through your brews, your favorite brews, and global brews through the links at the top of the page!

## Application Coding Details

This application utilizes elements of React(JavaScript, CSS & HTML) and Ruby (Active Records), to create a cohesive front end and back end experience. Users data persists to a backend database so that any changes that the user has made (making a username, creating an entry, or favoriting entries from other users) will persist even if the page is refreshed.

## About the Creators

Anna Schmidt, Brooke Ross, Chris Ding, and Justin Saborouh are all attending a 15 week, extremely rigorous online program (full time). Though this program comes with its challenges, they have already come to the end of their third phase (of five) at Flatirons School. This program is a culmination of their work as they have spent the past 9 weeks working on how to create the front and back end to web applications.

## Requirements For Our Project

For this project we:

- Used Active Record to interact with a database.
- Had at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Built a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Implemented proper front end state management. We also updated state using a
  setState function after receiving your response from a POST, PATCH, or DELETE 
  request. 
- Utulized OO design patterns. We have separate classes for each of our
  models, and created instance and class methods as necessary. 
- Routes are a large part in our application (both client side and back end) and follow RESTful conventions.
- Used our back end optimally. Passed JSON for related associations to the front 
  end from the back end. We used active record methods in our controller to grab
  the needed data from our database and provided as JSON to the front end. 

For example, within our application our front to back end allows a user to:

- **Create** a new brew card
- **Read** all of the my brews, favorite brews and global brews. 
- **Update** an individual brew card
- **Delete** a favorite, and also delete an entire post. 

Our Associations are as follows:

- An `Entry` _has many_ `Favorites` and _belongs to_ a `User`
- A `Favorite` _belongs to_ a `User` and _belongs to_ an `Entry`
- A `User` _has many_ `Favorites` and _has many_ `Entries` and _has many_ `Favorited_entries` _through_ `Favorites` with a _source_ of `Entry`
