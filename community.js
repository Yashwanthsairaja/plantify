$(document).ready(function() {
    $('#createPostForm').submit(function(e) {
        e.preventDefault();

        const postTitle = $('#postTitle').val();
        const postContent = $('#postContent').val();

        const newPost = `
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="
