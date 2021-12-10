<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {

            $user = JWTAuth::parseToken()->authenticate();

        } catch (TokenExpiredException $error) {

            $token = JWTAuth::parseToken()->refresh();

            return redirect()->back()->withCookie(cookie()->forever('token', $token));
            
        } catch (TokenInvalidException $error) {

            return response()->json(['error' => $error->getMessage()], 401);

        } catch (TokenBlacklistedException $error) {

            return response()->json(['error' => $error->getMessage()], 401);

        }

        return $next($request);
    }
}
