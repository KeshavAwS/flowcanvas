<!DOCTYPE html>
<html>
<head>
    <title>Create Post</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; }
        input, textarea { width: 100%; padding: 8px; margin: 8px 0 16px; box-sizing: border-box; }
        .error { color: red; font-size: 13px; }
    </style>
</head>
<body>
    <h1>Create Post</h1>
    <a href="{{ route('posts.index') }}">← Back</a>

    <form method="POST" action="{{ route('posts.store') }}">
        @csrf
        <label>Title</label>
        <input type="text" name="title" value="{{ old('title') }}" placeholder="Post title">
        @error('title') <p class="error">{{ $message }}</p> @enderror

        <label>Content</label>
        <textarea name="content" rows="6" placeholder="Write your post...">{{ old('content') }}</textarea>
        @error('content') <p class="error">{{ $message }}</p> @enderror

        <button type="submit">Save Post</button>
    </form>
</body>
</html>