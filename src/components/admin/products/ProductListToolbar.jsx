import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SearchIcon from "@material-ui/icons/Search";
import palette from "../../../lib/styles/palette";

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
    id: "stock",
    title: "재고 순",
  },
];

const activeTypo = (orderBy, state, title) => {
  return orderBy === state ? (
    <Typography sx={{ fontSize: "0.9rem", color: palette.blue }}>
      {title}
    </Typography>
  ) : (
    <Typography sx={{ fontSize: "0.9rem", color: "inherit" }}>
      {title}
    </Typography>
  );
};

const ProductListToolbar = ({
  orderBy,
  sort,
  onPriceChange,
  onSortChange,
  onDeletedProduct,
  onSearch,
  query,
}) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [q, setQ] = useState(query);
  const onQueryChange = (e) => {
    setQ(e.target.value);
  };
  const handleSearch = () => {
    onSearch(q);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleDeleted = (e) => {
    setIsDeleted(e.target.checked);
    onDeletedProduct(e.target.checked);
  };

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
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <TextField
            label="상품 검색"
            size="small"
            sx={{ flex: 3 }}
            value={q}
            onChange={onQueryChange}
            onKeyPress={onKeyPress}
          />
          <IconButton>
            <SearchIcon onClick={handleSearch} />
          </IconButton>
          <TextField
            sx={{ marginRight: 2, marginLeft: 2 }}
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
        </Grid>
        <Grid item container xs={12}>
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
                  <ArrowDropDownIcon
                    color="inherit"
                    sx={{ color: palette.blue }}
                  />
                ) : (
                  <ArrowDropUpIcon
                    color="inherit"
                    sx={{ color: palette.blue }}
                  />
                ))}
            </Button>
          ))}
          <FormControlLabel
            checked={isDeleted}
            control={<Checkbox />}
            onChange={handleDeleted}
            label="삭제된 상품"
            sx={{
              flex: 1,
              ".MuiFormControlLabel-label": { fontSize: "0.9rem" },
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductListToolbar;
