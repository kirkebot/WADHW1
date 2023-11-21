# wadhw3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development and starts the json server
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```


# Mis on tehtud ja veel vaja teha:
1. Your App should have two different “pages”, one of them should be the main “page“ that
contains at least 10 posts, and the other “page” should be the signup “page”. (0 points but
it is mandatory for completing the other tasks).
1.1. the main page should have the structure shown in Figure 1.

1.2. The signup page should have the structure shown in Figure 2.

2. The header should be a component that appears on both “pages” of your App, and it
should include navigation links/routes to both pages (2 points). **(võik ok olla)**
3. The footer also should be a component that appears on both “pages” of your App, and it
should include some basic information that traditional footers include (e.g., copyright, etc.)
(1 point).**(võik ok olla)**
4. Concerning the main page:
4.1. A post should have the same structure as the previous homework, but it has to be a
component that relies on Vuex global store to acquire/fetch its content information (3
points).
4.2. A post should have a “like” button that is accompanied by the number of likes, which
increases when we press the button (2 points).
4.3. On the main “page”, you need to add a button that resets the number of likes in all posts
to zero (2 points).
To avoid any confusion, the main page should appear like Figure 3.
Figure 3 the expected appearance of the main page
5. The signup “page” should include a form that contains the elements shown in Figure 2 (1
point).**(võik ok olla)**
6. The signup “page” should provide a password validation that checks for the following
conditions:
• The password should be of a specific length (at least 8 chars and less than 15 chars).
• Includes at least one uppercase alphabet character.
• Includes at least two lowercase alphabet characters.
• Includes at least one numeric value.
• It should start with an uppercase alphabet.
• It should include the character “_”
When the password does not satisfy any of the previous conditions, a text should appear
within the form stating that the password is not valid, followed by the conditions to be
followed when specifying the password. (3 points)
7. The styling of your overall App (1 point).
