<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use Illuminate\Contracts\Routing\ResponseFactory;
use Osiset\ShopifyApp\Contracts\ShopModel;

class ProductController extends Controller
{
    public function __construct(private readonly ResponseFactory $responseFactory){

    }
    public function store(CreateProductRequest $request){
        $data = $request->validated();
        $count = $data['count'];
        $products = [];

        for($i=0; $i<$count; $i++){
            $productResource = [
                'body_html'=> 'Product Description '.$i,
                'title'=> 'Product Title '.$i,
            ];
            /** @var ShopModel $shop */            
            $shop = $request->user();
                
            $response = $shop->api()->rest('POST','/admin/api/products.json', ['product'=>$productResource]);
            

            if(!empty($response['errors'])){
                throw $response['exception'];
            }

            $id = $response['body']['product']['id'];
            $title = $response['body']['product']['title'];
            $products[]=['id'=>$id,'title'=> $title];
             
            

        }
        return $this->responseFactory->json($products); 
    }
}
