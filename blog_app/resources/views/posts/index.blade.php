<!DOCTYPE html>
<html>
<head>
    <title>All Posts</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; }
        .post { border: 1px solid #ddd; padding: 16px; margin: 16px 0; border-radius: 8px; }
        .actions a, .actions button { margin-right: 8px; }
        .success { color: green; }
    </style>
</head>
<body>
    <h1>All Posts</h1>
    <a href="{{ route('posts.create') }}">+ Create Post</a>

    @if(session('success'))
        <p class="success">{{ session('success') }}</p>
    @endif

    @forelse($posts as $post)
        <div class="post">
            <h3>{{ $post->title }}</h3>
            <p>{{ $post->content }}</p>
            <div class="actions">
                <a href="{{ route('posts.edit', $post->id) }}">Edit</a>
                <form action="{{ route('posts.destroy', $post->id) }}" method="POST" style="display:inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit" onclick="return confirm('Delete this post?')">Delete</button>
                </form>
            </div>
        </div>
    @empty
        <p>No posts yet. Create one above!</p>
    @endforelse
</body>
</html>