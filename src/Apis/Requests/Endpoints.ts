export const Endpoints = {
    auth : (phone_number : string) => `user/auth?phone_number=${phone_number}`,
    authSMS : (code : string) => `user/auth/verify?code=${code}`,
    category : 'user/category',
    restaurants : (id : string) => `user/category/restaurant?id=${id}`,
    restaurant_categories : (id : string) => `user/restaurant/category?id=${id}`,
    restaurant_category_products : (id : string) => `user/restaurant/category-product?id=${id}`,
    restaurant_info : (id : string) => `user/restaurant/view?id=${id}`,
    restaurant_products : (id : string) => `user/restaurant/product?id=${id}`,


}