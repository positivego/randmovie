<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('auth')->group(function () {

    Route::group(['prefix' => 'dashboard', 'middleware' => ['auth:api' , 'admin']], function() {

        Route::view('/', 'dashboard.index')->name('dashboard');
        Route::view('/{any}', 'dashboard.index')->where('any', '.*');

    });

});

Route::view('/', 'app.index')->name('index');
Route::view('/{any}', 'app.index')->where('any', '.*');