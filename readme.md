# Rate My Kulich
A Kulich (plural Kulichi) is an elaborately decorated Russian Easter bread. This app has been designed for users to post their creations to be rated. Loosely inspired by the now defunct [ratemypoo.com](https://web.archive.org/web/20220101080721/https://www.ratemypoo.com/) (NSFW).

You can [check out my app](https://rate-my-kulich.herokuapp.com/) on Heroku.

## Technologies Used
This application was built using:
- MongoDB/Mongoose
- Node.js
- Express/EJS
- JS
- HTML
- CSS
- Bootstrap

## Approach
I used a [wireframe](https://balsamiq.cloud/solja5p/pgjz2tz) to map out each page of my app (final app has been altered to better suit the purpose of the app).

The app is built around two main databases: Users & Kulichi.

Users are able to: post, edit, delete & rate kulichi. 

## Problem Solving
After a user rated a kulich, the average rating did not update. I used AJAX to send/retrieve data without having to refresh the page.

## Issues
- Upon rating, the browser takes user to the top of the page. After troubleshooting, I was unable to implement AJAX to prevent this. This requires more debugging (but may have to do with data structure & bootstrap implementation).
- Error messages for login procedure are broken. Will fix this at the end of my course.

## Future Iterations
- AJAX for loading at the point that rating was made
- Fix error messages
- Implementation of profile image 
- Update to style & theming


