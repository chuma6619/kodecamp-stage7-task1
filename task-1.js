let postTitle = document.querySelector(".post-title");
let postBody = document.querySelector(".post-body");
let userPost = [];

function getPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        let postLayout = document.getElementById("post-layout");
        userPost = data;
        let postContainer = "";
        userPost.forEach(e => {
            postContainer += `
            <div class="col-md-4 col-sm-12  mb-3">
                <a href="task1result.html?pageId=${e.id}"  class="text-decoration-none" id="newPage">
                <div class="shadow rounded-3 h-100 mb-5 m-auto px-3 ">
                    <div class="d-flex justify-content-start">
                    <p class="bg-orange text-navy py-2 px-3 my-3 rounded-3">${e.id}</p>
                    </div>
                    <div class="mt-3 mb-5 text-navy">
                        <h3 class="text-center post-title">${e.title}</h3>
                    </div>
                    <div class=" mb-5 text-orange post-body">
                        <p>${e.body}</p>
                    </div>
                </div>
                </a>
            </div>
            `
            postLayout.innerHTML = postContainer;
            
        });

        console.log(userPost);
        // store the userPost array in the local storage.
        localStorage.setItem("userPosts", JSON.stringify(userPost));
    })
  
}

getPost();


// get the stored userPost array from the local storage.
let userPosts = JSON.parse(localStorage.getItem("userPosts"));
console.log(userPosts);

// get the url page parameter.
let params = new URLSearchParams(window.location.search),
id = params.get("pageId");
console.log(id)

let resultBody = document.getElementById("result-body");
let resultTitle = document.getElementById("result-title");
let resultId = document.getElementById("result-id");

userPosts.forEach(e => {
    if(id == `${e.id}`){
        resultBody.innerHTML += `${e.body}`;
        resultTitle.innerHTML += `${e.title}`
        resultId.innerHTML += `${e.id}`
    }
});






    








