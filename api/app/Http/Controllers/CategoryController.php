<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        $categories=Category::get();
        return CategoryResource::collection($categories);
    }

    public function show(string $id)
    {
        $category=Category::find($id);
        return new CategoryResource($category);
    }

    public function store(Request $request)
    {
            $data = $request->validate([
                'title' => [ 'string', 'min:2'],
                'description' => [ 'required','string'],


            ]);

                $category= Category::factory()->create([

                'title' => $data['title'],
                'description' => $data['description'],

            ]);
            return $category;

    }

    public function update(Request $request, string $id)
    {
        $data = $request->validate([
                'title' => [ 'string', 'min:2'],
                'description' => [ 'required','string'],


            ]);
        $category=Category::find($id);
        $category->update([
            'title' => $data['title'],
            'description' => $data['description']
        ]);
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          $category=Category::find($id);
         $category->delete();
         return response()->json(["msg"=>"Запись удалена успешно"]);


    }

}
