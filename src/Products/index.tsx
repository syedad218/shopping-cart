import { useState } from "react";
import { useQuery } from "react-query";
// components and icons
/** better syntax for minimizing bundle size */
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import { CartItemType } from "./types";
import { getProducts } from "./apiService";
import Item from "./Item";
import styled from "@emotion/styled";

const Wrapper = styled.div``;

const ProductsView: React.FC<{}> = ({}) => {
  const { data, isLoading, error } = useQuery<CartItemType[], Error>(
    "products",
    getProducts
  );

  const handleAddToCart = (clickedItem: CartItemType) => null;

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductsView;
