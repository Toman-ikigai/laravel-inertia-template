<?php

namespace App\Http\Requests\Register;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterStore extends FormRequest
{
    public function rules()
    {
        return [
            'organisation_name' => ['required', 'string'],
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => [
                'required',
                Password::min(6)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
            ],
        ];
    }

    public function attributes()
    {
        return [
            'organisation_name' => 'organisation name',
            'first_name' => 'first name',
            'last_name' => 'last name',
        ];
    }
}
