<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'       => $this->faker->unique()->company(),
            'description' => $this->faker->paragraphs(3, true),
        ];
    }
}
