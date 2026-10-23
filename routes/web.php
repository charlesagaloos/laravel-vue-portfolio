<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/experience', 'Experience')->name('experience');
Route::inertia('/projects', 'Projects')->name('projects');
Route::inertia('/projects/{project}', 'ProjectShow')->name('projects.show');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/resume', 'Resume')->name('resume');
