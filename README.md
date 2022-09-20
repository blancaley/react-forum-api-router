# Single Page Application with React and React Router

This app is built using React.\
To enable client side routing I'm using React Router. This allows the app to update the URL from a link click without making another request from the server.\
JSONPlaceholder is used as an API to fetch posts and comments to display on the forum.
The app is styled using css modules and React Font Awesome.

## Pages
### / (Home Page)

The user can see all posts. Only post title is displayed.\
When a post is clicked the app displays a new page with URL /post/:id

### /post/:id (Post Page)

In the post page the user can see the post title and description.\
All comments for each post are also displayed. \
Each comment has its description, as well as email about the user that wrote the comment.
This page has a button to go back to the homepage where all posts are displayed.

### /about (About Page)

Information and technical requirements about the project.

## API endpoints
### Posts
https://jsonplaceholder.typicode.com/posts

### Comments
https://jsonplaceholder.typicode.com/comments

## App images
<img width="1269" alt="Screenshot 2022-09-20 at 15 17 25" src="https://user-images.githubusercontent.com/32361363/191268385-59cdbdc9-b8cf-4cdb-9be2-63ed8309cac5.png">

<img width="1268" alt="Screenshot 2022-09-20 at 15 34 23" src="https://user-images.githubusercontent.com/32361363/191272079-d71bec43-2791-4c33-9d19-cdf69b1e3369.png">


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
