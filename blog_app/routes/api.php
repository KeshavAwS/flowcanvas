<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/posts',       [PostController::class, 'apiIndex']);
Route::post('/posts',      [PostController::class, 'apiStore']);
Route::get('/posts/{id}',  [PostController::class, 'apiShow']);
Route::put('/posts/{id}',  [PostController::class, 'apiUpdate']);
Route::delete('/posts/{id}', [PostController::class, 'apiDelete']);