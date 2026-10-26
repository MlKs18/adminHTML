<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
    //return $request->user();
//})->middleware('auth:sanctum');
Route::get('/test', function (Request $request) {
    return "Hello test";
});

Route::prefix("user")-> group(function () {
    Route::get('/', [\App\Http\Controllers\UserController::class, 'index']);
    Route::get('/{id}', [\App\Http\Controllers\UserController::class, 'show']);
    Route::post('/', [\App\Http\Controllers\UserController::class, 'store']);
    Route::put('/{id}', [\App\Http\Controllers\UserController::class, 'update']);
    Route::delete('/{id}', [\App\Http\Controllers\UserController::class, 'destroy']);
})->name("user");

Route::prefix("category")-> group(function () {
    Route::get('/', [\App\Http\Controllers\CategoryController::class, 'index']);
    Route::get('/{id}', [\App\Http\Controllers\CategoryController::class, 'show']);
    Route::post('/', [\App\Http\Controllers\CategoryController::class, 'store']);
    Route::put('/{id}', [\App\Http\Controllers\CategoryController::class, 'update']);
    Route::delete('/{id}', [\App\Http\Controllers\CategoryController::class, 'destroy']);
})->name("category");

Route::prefix("product")-> group(function () {
    Route::get('/', [\App\Http\Controllers\ProductController::class, 'index']);
    Route::get('/{id}', [\App\Http\Controllers\ProductController::class, 'show']);
    Route::post('/', [\App\Http\Controllers\ProductController::class, 'store']);
    Route::put('/{id}', [\App\Http\Controllers\ProductController::class, 'update']);
    Route::delete('/{id}', [\App\Http\Controllers\ProductController::class, 'destroy']);
})->name("product");

Route::prefix("auth")-> group(function () {
    Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
})->name("auth");
 Route::get('/test', [\App\Http\Controllers\TestController::class, 'index']);
