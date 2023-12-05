    import axios from 'axios';

    // 상품(항공권) 전체 조회
    export const product_list = () => axios.get("/product")

    // 상품(항공권) 선택 조회
    export const product_select = (productNo) => axios.get(`/product/${productNo}`)

    // 상품(항공권) 등록
    export const product_insert = (productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock) => axios.post("/product", {productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock})

    // 상품(항공권) 수정
    export const product_update = (productNo, productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock) => axios.put("/product", {productNo, productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock})

    // 상품(항공권) 삭제
    export const product_delete = (productNo) => axios.get(`/product/${productNo}`)
