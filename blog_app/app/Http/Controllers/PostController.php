<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        return view('posts.index', compact('posts'));
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'   => 'required|min:3',
            'content' => 'required',
        ]);

        Post::create($validated);

        return redirect()->route('posts.index')->with('success', 'Post created!');
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title'   => 'required|min:3',
            'content' => 'required',
        ]);

        $post->update($validated);

        return redirect()->route('posts.index')->with('success', 'Post updated!');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('posts.index')->with('success', 'Post deleted!');
    }

    // API methods
    public function apiIndex()
    {
        return response()->json(Post::latest()->get());
    }

    public function apiStore(Request $request)
    {
        $post = Post::create($request->validate([
            'title'   => 'required|min:3',
            'content' => 'required',
        ]));
        return response()->json($post, 201);
    }

    public function apiShow($id)
    {
        return response()->json(Post::findOrFail($id));
    }

    public function apiUpdate(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->update($request->validate([
            'title'   => 'required|min:3',
            'content' => 'required',
        ]));
        return response()->json($post);
    }

    public function apiDelete($id)
    {
        Post::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}