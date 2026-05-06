<!DOCTYPE html>
<html>
<head>
    <title>Edit Post</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; }
        input, textarea { width: 100%; padding: 8px; margin: 8px 0 16px; box-sizing: border-box; }
        .error { color: red; font-size: 13px; }
    </style>
</head>
<body>
    <h1>Edit Post</h1>
    <a href="{{ route('posts.index') }}">← Back</a>

    <form method="POST" action="{{ route('posts.update', $post->id) }}">
        @csrf
        @method('PUT')

        <label>Title</label>
        <input type="text" name="title" value="{{ old('title', $post->title) }}">
        @error('title') <p class="error">{{ $message }}</p> @enderror

        <label>Content</label>
        <textarea name="content" rows="6">{{ old('content', $post->content) }}</textarea>
        @error('content') <p class="error">{{ $message }}</p> @enderror

        <button type="submit">Update Post</button>
    </form>
</body>
</html>