<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioRating extends Model
{
    protected $fillable = [
        'rating',
        'feedback',
    ];
}
