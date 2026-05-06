<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

// Breeze auth routes (login, register, logout)
require __DIR__.'/auth.php';

// Redirect root to posts
Route::get('/', function () {
    return redirect()->route('posts.index');
});

// Dashboard route Breeze expects after login/register
Route::get('/dashboard', function () {
    return redirect()->route('posts.index');
})->middleware(['auth'])->name('dashboard');

// Protected blog routes
Route::middleware('auth')->group(function () {
    Route::resource('posts', PostController::class);
});