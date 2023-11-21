function goToHome() {
    location.href="index.html";
 }

 document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("login-button");
    var errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function (event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Insert both Email and password";
            event.preventDefault(); // Prevent the form from submitting
        } else {
            errorMessage.textContent = ""; // Clear any previous error message
            // Redirect to index.html (you may need to adjust the path)
            window.location.href = "index.html";
        }
    });
});

// ------  json file reader  ------
window.onload = function () {
    fetch("./res/json/posts.json")
    //fetch("https://api.npoint.io/4ca41270ded4dfc0e351")
      .then((response) => response.json())
      .then((json) => {
        
        var posts = json;   
        for(var i = 0; i < posts.length; i++){
            var post = posts[i];
            let divPost = document.createElement("div");
            let divPostHeader = document.createElement("div");
            let divPostContent = document.createElement("div");
            let p_postDate = document.createElement("p");
            let p_post = document.createElement("p");
            var img_post = null;
            if (post.hasOwnProperty("image_url")) {
                img_post = document.createElement("img");
            }
            let img_creator = document.createElement("img");
            img_creator.src = "res/images/me.png";
            divPost.setAttribute("class", "post");
            divPostHeader.setAttribute("class", "postHeader");
            divPostContent.setAttribute("class", "postContent");
            p_postDate.setAttribute("id", "postDate");

            
            p_postDate.textContent = post.date;
            p_post.textContent = post.text;

            divPost.appendChild(divPostHeader);
            divPost.appendChild(divPostContent);

            divPostHeader.appendChild(img_creator);
            divPostHeader.appendChild(p_postDate);

            if(img_post != null){
                img_post.src = post.image_url;
                divPostContent.appendChild(img_post);
            }
            divPostContent.appendChild(p_post);

            let contentDiv = document.getElementsByClassName("content");
            console.log(contentDiv);
            contentDiv[0].appendChild(divPost);
        }
      })
      
  
  };
  // dropdown  menu

  document.getElementById("profilePic").addEventListener("click", function(){
    var dc = document.getElementById("dropdownContent");
    if (dc.style.display === "block") {
        dc.style.display = "none";
    } else {
        dc.style.display = "block";
    }
  })