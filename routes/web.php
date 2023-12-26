<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('verify.shopify')->group(function(){
    //Route::get('/', fn()=>view('welcome'))->name('home');
    Route::view('/', 'app')->name('home');
    //Route::post('/products', fn()=>response()->noContent());
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/me',fn()=>response()->json(['name'=>auth()->user()->name]));
});
