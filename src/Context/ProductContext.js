import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductsReducer";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const productData = await response.data;
      dispatch({ type: "SET_API_DATA", payload: productData });
      // console.log(dispatch);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 2nd API call For Single Product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
      <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

// Custom Hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { ProductContext, AppContext, useProductContext };
