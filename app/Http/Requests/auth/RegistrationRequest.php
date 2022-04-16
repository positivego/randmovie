<?php

namespace App\Http\Requests\auth;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'credentials' => ['required', 'array'],
            '*.name' => ['required', 'string', 'max:50', 'min:3'],
            '*.email' => ['required', 'string', 'email:rfc', 'unique:users,email', 'max:255', 'min:3'],
            '*.password' => ['required', 'string', 'max:255', 'min:8', 'confirmed'],
            '*.password_confirmation' => ['required', 'string', 'max:255', 'min:8'],
        ];
    }

    public function messages()
    {
        return [
            'credentials.name.required' => 'Необходимо ввести имя',
            'credentials.email.email' => 'Не корректный email',
        ];
    }
}
