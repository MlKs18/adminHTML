<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResourse;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users=User::get();
        return UserResourse::collection($users);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $data = $request->validate([
                'name' => [ 'string', 'min:2'],
                'email' => [ 'required','email'],


            ]);

                $user= User::factory()->create([

                'name' => $data['name'],
                'email' => $data['email'],

            ]);
            return $user;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user=User::find($id);
        return new UserResourse($user);
    }




    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
                'name' => [ 'string', 'min:2'],
                'email' => [ 'required','email'],
              ]);
        $user=User::find($id);
        $user->update([
            'name' => $data['name'],
            'email' => $data['email']
        ]);
        return new UserResourse($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $user=User::find($id);
         $user->delete();
         return response()->json(["msg"=>"Запись удалена успешно"]);


    }

}


