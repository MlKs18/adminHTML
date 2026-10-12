<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
class ProductController extends Controller
{
    public function index()
    {
        $products=Product::get();
        return ProductResource::collection($products);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'min:2', 'max:255'],
            'price' => ['required', 'numeric', 'min:0'],
            'description' => ['required', 'string', 'min:2'],
        ]);

            $product= Product::factory()->create([
                'title' => $data['title'],
                'price' => $data['price'],
                'description' => $data['description']
            ]);
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product=Product::find($id);
        return new ProductResource($product);
    }

    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'min:2', 'max:255'],
            'price' => ['required', 'numeric', 'min:0'],
            'description' => ['required', 'string', 'min:2'],
        ]);
         $product=Product::find($id);
        $product->update([
            'title' => $data['title'],
            'price' => $data['price'],
            'description' => $data['description']
        ]);
        return new ProductResource($product);
    }

    public function destroy(string $id)
    {
         $product=Product::find($id);
         $product->delete();
         return response()->json(["msg"=>"Запись удалена успешно"]);


    }

}
