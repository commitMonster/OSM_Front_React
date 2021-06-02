import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const EditForm = ({ product, onChangeField }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        상품 정보를 작성해주세요
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="name"
            name="name"
            label="상품 이름"
            value={product.name}
            onChange={(e) =>
              onChangeField({
                mode: "product",
                key: "name",
                value: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="상품 설명"
            value={product.description}
            onChange={(e) =>
              onChangeField({
                mode: "product",
                key: "description",
                value: e.target.value,
              })
            }
            fullWidth
            multiline
            rows={4}
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="count"
            name="count"
            label="재고"
            value={product.count}
            onChange={(e) =>
              onChangeField({
                mode: "product",
                key: "count",
                value: parseInt(e.target.value, 10),
              })
            }
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="price"
            name="price"
            label="가격"
            value={product.price}
            onChange={(e) =>
              onChangeField({
                mode: "product",
                key: "price",
                value: parseInt(e.target.value, 10),
              })
            }
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="delivery"
            name="delivery"
            label="배달비"
            value={product.delivery}
            onChange={(e) =>
              onChangeField({
                mode: "product",
                key: "delivery",
                value: parseInt(e.target.value, 10),
              })
            }
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>카테고리</InputLabel>
            <Select
              id="category"
              value={product.categoryId}
              label="카테고리"
              onChange={(e) =>
                onChangeField({
                  mode: "product",
                  key: "categoryId",
                  value: e.target.value,
                })
              }
            >
              <MenuItem value={1}>티셔츠</MenuItem>
              <MenuItem value={2}>과잠</MenuItem>
              <MenuItem value={3}>텀블러</MenuItem>
              <MenuItem value={4}>스티커</MenuItem>
              <MenuItem value={5}>담요</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(EditForm);
