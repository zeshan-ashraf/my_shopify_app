@extends('shopify-app::layouts.default')

@section('content')
    <p>Hello Shopify World, Zeshan here</p>
@endsection

@section('scripts')
    @parent
   
        
    @vite('resources/js/app.js')
@endsection    