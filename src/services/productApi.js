export async function getProducts (){
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function getProductByName(name){
    try{
        const response = await fetch(`https://dummyjson.com/products/search?=${name}`);
        const data = response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export async function getSingleProduct(id){
    try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export async function getAndSkipProducts(limit,skip){
    try{
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}