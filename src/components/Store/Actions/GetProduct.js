import axios from "axios"

const GetProduct = () => {
    return async (dispatch) => {

        let Api = await axios.get("https://fakestoreapi.com/products")
        let data = Api.data

        dispatch({
            type: "GetProduct",
            payload: data
        })
    }
}

export { GetProduct }