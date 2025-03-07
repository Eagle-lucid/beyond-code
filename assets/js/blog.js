document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
    const categoryButtons = document.querySelectorAll("#category-filters button");

    // Fetch blog posts
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts); // show all posts by default

            // Add category filter event listeners
            categoryButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const category = button.getAttribute("data-category");
                    if (category === "all") {
                        displayPosts(posts);
                    } else {
                        const filteredPosts = posts.filter(post => post.category === category);
                        displayPosts(filteredPosts);
                    }
                });
            });
        })
        .catch(error => console.error("Error loading blog posts:", error));
});

// Function to display posts 
function displayPosts(posts) {

    postsContainer.innerHTML = ""; // Properly clear previous post

    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("blog-post");
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <button class="read-more">Read More</button>
        `;

        article.addEventListener("click", () => showFullPost(post));

        postsContainer.appendChild(article);
    });

}

// Function to show full blog post
function showFullPost(post) {
    document.getElementById("full-post-title").textContent = post.title;
    document.getElementById("full-post-content").textContent = post.content;

    document.getElementById("blog").style.display = "none"; // Hide previews
    document.getElementById("full-post-section").style.display = "block"; // Show full post

    document.getElementById("back-to-posts").addEventListener("click", () => {
        document.getElementById("full-post-section").style.display = "none";
        document.getElementById("blog").style.display = "block";
    });
}