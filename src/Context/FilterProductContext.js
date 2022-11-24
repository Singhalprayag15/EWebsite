import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  filters: {
    text: "",
  },
};

const FilterProductContext = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // To set the grid view.
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // To set the List view.
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // update the Filter Value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProductContext;
