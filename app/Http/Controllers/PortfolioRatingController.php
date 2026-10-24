<?php

namespace App\Http\Controllers;

use App\Models\PortfolioRating;
use Illuminate\Http\Request;

class PortfolioRatingController extends Controller
{
    public function index()
    {
        return response()->json($this->summary());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'rating' => ['required', 'integer', 'between:1,5'],
            'feedback' => ['nullable', 'string', 'max:500'],
        ]);

        PortfolioRating::create($validated);

        return response()->json([
            'message' => 'Thank you for rating the portfolio.',
            'summary' => $this->summary(),
        ], 201);
    }

    private function summary(): array
    {
        $ratings = PortfolioRating::query();
        $distribution = PortfolioRating::query()
            ->selectRaw('rating, COUNT(*) as total')
            ->groupBy('rating')
            ->pluck('total', 'rating')
            ->map(fn ($total) => (int) $total)
            ->all();

        return [
            'average' => round((float) ($ratings->avg('rating') ?? 0), 1),
            'total' => $ratings->count(),
            'distribution' => $distribution,
            'recent' => PortfolioRating::query()
                ->whereNotNull('feedback')
                ->latest()
                ->limit(4)
                ->get(['rating', 'feedback', 'created_at']),
        ];
    }
}
