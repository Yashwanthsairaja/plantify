$(document).ready(function() {
    // Sample data to simulate posts (you can replace this with actual data)
    const samplePosts = [
        { title: 'New Plant Enthusiast - Greetings to the Community!', content: "Hey everyone, I'm a new plant enthusiast and I'm excited to join this community. I recently started my plant collection and would love to learn from all of you. Any tips for beginners?", },
        { title: 'Sharing My Blooming Succulent Collection', content: "Hi Plantify community! I just wanted to share the joy of my succulent collection that's in full bloom right now. These little guys bring so much happiness. Anyone else here love succulents as much as I do?", }
    ];

    // Function to create and append a new post to the post list
    function appendPost(title, content) {
        const postHTML = `
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text post-content">${content}</p>
                        <a href="#" class="btn btn-primary read-more">Read More</a>
                    </div>
                </div>
            </div>
        `;

        $('#post-list .row').append(postHTML);
    }

    // Show or hide read more content
    $('#post-list').on('click', '.read-more', function() {
        const postContent = $(this).siblings('.post-content');
        postContent.toggleClass('expanded');
        if (postContent.hasClass('expanded')) {
            $(this).text('Read Less');
        } else {
            $(this).text('Read More');
        }
    });

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
