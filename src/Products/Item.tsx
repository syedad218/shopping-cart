/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";
import { CartItemType } from "./types";
import { Wrapper } from "./products.styles";
import { css } from "@emotion/react";

const imageStyle = css({
  height: "250px"
});

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <div css={imageStyle}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="text-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
