import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const orderByList = [
  {
    id: "createdAt",
    title: "등록 순",
  },
  {
    id: "score",
    title: "인기순",
  },
  {
    id: "price",
    title: "가격 순",
  },
  {
    id: "delivery",
    title: "배달비 순",
  },
  {
    id: "name",
    title: "이름 순",
  },
  {
    id: "count",
    title: "재고 순",
  },
];

const activeTypo = (orderBy, state, title) => {
  return orderBy === state ? (
    <Typography sx={{ color: "#3887A6" }}>{title}</Typography>
  ) : (
    <Typography sx={{ color: "inherit" }}>{title}</Typography>
  );
};

const ProductListToolbar = ({ orderBy, sort, onPriceChange, onSortChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceError, setPriceError] = useState(false);

  useEffect(() => {
    if (minPrice > maxPrice) {
      setPriceError(true);
      return;
    } else {
      setPriceError(false);
    }
    onPriceChange(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  return (
    <Card
      sx={{
        display: "flex",
        p: 2,
        m: 2,
        justifyContent: "center",
        alignItems: "center",
        minWidth: 1050,
      }}
    >
      <TextField
        sx={{ marginRight: 2 }}
        placeholder="최소금액"
        variant="outlined"
        size="small"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <div style={{ textAlign: "center", margin: "auto" }}> ~</div>
      <TextField
        sx={{ marginRight: 2, marginLeft: 2 }}
        placeholder="최대금액"
        size="small"
        variant="outlined"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      {orderByList.map((item) => (
        <Button
          color="inherit"
          onClick={() => {
            orderBy !== item.id
              ? onSortChange(item.id, "desc")
              : sort === "desc"
              ? onSortChange(item.id, "asc")
              : onSortChange(item.id, "desc");
          }}
          sx={{
            flex: 1,
          }}
        >
          {activeTypo(orderBy, item.id, item.title)}
          {orderBy === item.id &&
            (sort === "desc" ? (
              <ArrowDropDownIcon color="inherit" sx={{ color: "#3887A6" }} />
            ) : (
              <ArrowDropUpIcon color="inherit" sx={{ color: "#3887A6" }} />
            ))}
        </Button>
      ))}
    </Card>
  );
};

export default ProductListToolbar;
