a. The home page (details will follow about its content) should be protected, i.e., only
authenticated users can reach/access it.
b. A contact us “page” (not protected) that contains just basic contact us information.
Note: you can simply change the “about page” (created by Vue.js) to the “Contacts
page”.
c. A signup “page” that allows a user to register by providing her email and password. The
signup “page” should look close enough to Figure 1a (2 points).
d. A login “page” that allows a registered user to login by providing her email and
password. The login “page” should contain a button that, when pressed, should
redirect the user to the signup “page”. The login “page” should look close enough to
Figure 1b (2 points).
Note: The points for (c and d) are assigned based on the provided functionalities. For example,
you get two points for “c” if your signup “page” sends the credentials (email and password) of
the user to the server and the server checks if such a user exists. If not, it will insert the
credentials in the database. Then, create a JWT and return it to the client.

The home “page” should:
a. Automatically fetches and presents all posts from the database (1 point);
b. Each listed post should be clickable and when clicked it should redirect you to “a post”
“page” (details about the content of this page will follow) - (0.5 points).
c. includes a “logout” button that, when clicked, will logout the user and redirect her to
the login page (1 point).
d. includes an “add post” button that, when clicked, will redirect the user to the add post
“page” (details about the content of this page will follow) (0.5 points).
e. includes a “delete all” button, that when clicked will delete all the posts from the
database (2 points).
