1-Add a ".env" file in the server/backend folder.
Add two lines-
MONGO=mongodb://localhost:27017 or your mongodb connection string
JWT="ivykids" or anything else

2-run npm i inside the server as well as the client folder.
The server is running on port 8000.

Also want to mention the main functionality i have added-

1- The Home page shows the tweets of the current user as well as the users that current user has followed and the tweets are displayed in the chronological order as required.
2- The Explore page shows tweets of all the users that have created an account in this mini twitter app and the tweets are displayed in the order of most likes, by this i mean, the tweets with more likes are displayed on top of the tweets with less likes.
3- The Profile page shows all the current user's tweets and also a delete account button by which the user can delete his account on a single click.
4- User can delete his tweets by pressing the delete button below his tweets.
5- User can update his tweets.
6- User can like his or other's tweets.
7- etc etc.

IN THE package.json file of the server, please update the start inside the scripts from "nodemon index.js" to "node index.js".
THE OTHER WAY IS TO INSTALL THE "NODEMON" NPM PACKAGE.

LET ME KNOW IF MORE INFORMATION IS NEED OR THERE"S ANY ISSUE LOADING THE APP.
