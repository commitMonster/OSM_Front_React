import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const categoryIdReduce = (id) => {
  switch (id) {
    case 1:
      return "티셔츠";
    case 2:
      return "과잠";
    case 3:
      return "텀블러";
    case 4:
      return "스티커";
    case 5:
      return "담요";
    default:
      return "카테고리 없음";
  }
};

const ProductListTable = ({
  products,
  selectedProductIds,
  setSelectedProductIds,
  onEdit,
  onDelete,
}) => {
  const baseURL = "https://shop.dnatuna.fun/api/";
  const handleSelectAll = (event) => {
    let newSelectedProductIds;

    if (event.target.checked) {
      newSelectedProductIds = products.map((product) => product.id);
    } else {
      newSelectedProductIds = [];
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductIds.indexOf(id);
    let newSelectedProductIds = [];

    if (selectedIndex === -1) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(1)
      );
    } else if (selectedIndex === selectedProductIds.length - 1) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(0, selectedIndex),
        selectedProductIds.slice(selectedIndex + 1)
      );
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  return (
    <Grid container spacing={3} sx={{ m: 2, pl: 5 }}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Box
            sx={{
              m: 2,
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={() => {}}>선택삭제</Button>
            <Button sx={{ mx: 1 }} onClick={() => {}}>
              전체삭제
            </Button>
            <Button color="primary" variant="contained">
              <Link to="/admin/editProduct">물품 추가</Link>
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedProductIds.length === products.length}
                    color="primary"
                    indeterminate={
                      selectedProductIds.length > 0 &&
                      selectedProductIds.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>상품 이미지</TableCell>
                <TableCell>상품 이름</TableCell>
                <TableCell>카테고리</TableCell>
                <TableCell>가격</TableCell>
                <TableCell>배달비</TableCell>
                <TableCell>인기도</TableCell>
                <TableCell>재고</TableCell>
                <TableCell>수정 / 삭제</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product) => (
                <TableRow
                  hover
                  key={product.id}
                  selected={selectedProductIds.indexOf(product.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProductIds.indexOf(product.id) !== -1}
                      onChange={(event) => handleSelectOne(event, product.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        width: "3rem",
                        height: "3rem",
                        alignItems: "center",
                        display: "flex",
                        backgroundImage: `url(${baseURL}${product.image[0]})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </TableCell>
                  <TableCell> {categoryIdReduce(product.categoryId)}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.delivery}</TableCell>
                  <TableCell>{product.score}</TableCell>
                  <TableCell>{product.count}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => {
                        onEdit(product);
                      }}
                    >
                      수정
                    </button>
                    <span> / </span>
                    <button
                      onClick={() => {
                        onDelete(product.id);
                      }}
                    >
                      삭제
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Grid>
  );
};

export default ProductListTable;