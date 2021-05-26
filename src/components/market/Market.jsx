import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ProductThumb from "../product/ProductThumb";
import Pagination from "./Pagination";
import { SettingsRemoteOutlined } from "@material-ui/icons";

const activeTypo = (orderBy, state, title) => {
  return orderBy === state ? (
    <Typography sx={{ color: "#3887A6" }}>{title}</Typography>
  ) : (
    <Typography sx={{ color: "inherit" }}>{title}</Typography>
  );
};

const orderByList = [
  {
    id: "createdAt",
    title: "최근 업데이트 순",
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

const Market = ({
  products,
  categoryId,
  orderBy,
  sort,
  onCategoryChange,
  onSortChange,
  page,
  lastPage,
  onPageChange,
  onPriceChange,
}) => {
  const [category, setCategory] = useState(categoryId);
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

  useEffect(() => {
    onCategoryChange(category);
  }, [category]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ borderRight: "1px solid #E0E0E0", paddingRight: "0.2rem" }}
        >
          <List component="nav" aria-label="main mailbox folders">
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <ListItem>
                <FormLabel component="legend">Category</FormLabel>
              </ListItem>
              <RadioGroup
                aria-label="Tag"
                name="Tag"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value=""
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="All"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value="1"
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="티셔츠"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value="2"
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="과잠"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value="3"
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="텀블러"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>
                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value="4"
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="스티커"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>
                <ListItem button alignItems="center" sx={{ padding: "0" }}>
                  <FormControlLabel
                    value="5"
                    control={<Radio sx={{ color: "#3887A6 !important" }} />}
                    label="담요"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>
                <Divider />
                <List component="nav">
                  <Grid container p={2} alignItems="center">
                    <Grid item xs={4}>
                      최소가격
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        size="small"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid container p={2} alignItems="center">
                    <Grid item xs={4}>
                      최대가격
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        size="small"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid container p={2} alignItems="center">
                    <Grid item xs={12}>
                      <span style={{ color: "red", fontSize: "0.8rem" }}>
                        {priceError && "다시 설정해주세요"}
                      </span>
                    </Grid>
                  </Grid>
                </List>
              </RadioGroup>
            </FormControl>
          </List>
        </Grid>
        <Grid container item xs={12} md={10} sx={{ padding: "0 1rem" }}>
          <Grid
            item
            xs={12}
            sx={{
              margin: "0.5rem 0 2rem 0",
              backgroundColor: "#F0F0F0",
              height: "fit-content",
            }}
          >
            {orderByList.map((item) => (
              <Button
                color="inherit"
                onClick={() => {
                  sort === "desc"
                    ? onSortChange(item.id, "asc")
                    : onSortChange(item.id, "desc");
                }}
              >
                {activeTypo(orderBy, item.id, item.title)}
                {orderBy === item.id &&
                  (sort === "desc" ? (
                    <ArrowDropDownIcon />
                  ) : (
                    <ArrowDropUpIcon />
                  ))}
              </Button>
            ))}
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(15rem, max-content))",
              gridGap: "1rem",
              justifyContent: "center",
              padding: "initial",
            }}
          >
            {products.map((product) => (
              <ProductThumb key={product.id} product={product} />
            ))}
          </Box>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              page={page}
              lastPage={lastPage}
              onPageChange={onPageChange}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Market;
