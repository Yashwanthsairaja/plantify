$(document).ready(function() {
    // Sample data to simulate posts (you can replace this with actual data)
    const samplePosts = [
        { title: 'New Plant Enthusiast - Greetings to the Community!', content: "Hey everyone, I'm a new plant enthusiast...", },
        { title: 'Sharing My Blooming Succulent Collection', content: "Hi Plantify community! I just wanted to share the joy...", }
    ];

    // Function to create and append a new post to the post list
    function appendPost(title, content) {
        const postHTML = `
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;

        $('#post-list .row').append(postHTML);
    }

    // Initial posts on page load (you can replace this with your data)
    samplePosts.forEach(post => {
        appendPost(post.title, post.content);
    });

    $('#createPostForm').submit(function(e) {
        e.preventDefault();
        const postTitle = $('#postTitle').val();
        const postContent = $('#postContent').val();
        // Add the new post to the page
        appendPost(postTitle, postContent);
        // Reset form fields
        $('#postTitle').val('');
        $('#postContent').val('');
    });
});
