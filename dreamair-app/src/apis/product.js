    import axios from 'axios';

    // 상품(항공권) 전체 조회
    export const product_list = () => axios.get("/product")

    // 상품(항공권) 선택 조회
    export const product_select = (productNo) => axios.get(`/product/${productNo}`)

    // 상품(항공권) 등록
    export const product_insert = (product) => axios.post("/product", {product})

    // 상품(항공권) 수정
    export const product_update = (product) => axios.put("/product", {product})

    // 상품(항공권) 삭제
    export const product_delete = (productNo) => axios.delete(`/product/${productNo}`)
