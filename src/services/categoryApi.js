export async function getAllCategories(){
    try{
        const response = await fetch(`https://dummyjson.com/products/categories`);
        const data = response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function getProductsByCategory(category){
    try{
        const response = await fetch(`https://dummyjson.com//products/category/${category}`);
        const data = response.json();
        return data
    } catch(error){
        console.log(error)
    }
}