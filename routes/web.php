<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioRatingController;

Route::inertia('/', 'Welcome')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/experience', 'Experience')->name('experience');
Route::inertia('/projects', 'Projects')->name('projects');
Route::inertia('/projects/{project}', 'ProjectShow')->name('projects.show');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/resume', 'Resume')->name('resume');
Route::get('/ratings', [PortfolioRatingController::class, 'index'])->name('ratings.index');
Route::post('/ratings', [PortfolioRatingController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('ratings.store');
