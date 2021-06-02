import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Card>
      <CardContent>
        <Box display={"flex"} justifyContent="flex-start">
          <TextField
            sx={{ maxWidth: 500 }}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Product"
            variant="outlined"
          />
          <Box margin="auto" display="flex" flexDirection="row">
            <Button sx={{ flexBasis: "1", margin: "auto" }}> 인기순</Button>
            <Button sx={{ flexBasis: "1", margin: "auto" }}> 가격순</Button>
            <Button sx={{ flexBasis: "1", margin: "auto" }}> 이름순</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
    <Box
      sx={{
        m: 2,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button>선택삭제</Button>
      <Button sx={{ mx: 1 }}>전체삭제</Button>
      <Button color="primary" variant="contained">
        물품 추가
      </Button>
    </Box>
  </Box>
);

export default ProductListToolbar;
