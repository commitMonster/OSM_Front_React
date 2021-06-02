import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { textAlign } from "@material-ui/system";
import { Search as SearchIcon } from "react-feather";
import { Link } from "react-router-dom";
const BannerToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    ></Box>
    <Box>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                marginRight: "3rem",
              }}
            >
              <TextField
                sx={{ marginRight: 2 }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon> */}
                    </InputAdornment>
                  ),
                }}
                placeholder="시작날짜"
                variant="outlined"
              />
              <div style={{ textAlign: "center", margin: "auto" }}> ~</div>
              <TextField
                sx={{ marginRight: 2, marginLeft: 2 }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon> */}
                    </InputAdornment>
                  ),
                }}
                placeholder="마감날짜"
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{ margin: "auto" }}
                onClick={() => {}}
              >
                {" "}
                검색
              </Button>
            </div>
            <Box sx={{ marginLeft: 2 }} display="flex" flexDirection="row">
              <Button
                sx={{ flexBasis: "1", marginRight: "2" }}
                onClick={() => {}}
              >
                {" "}
                활성 이벤트 확인
              </Button>
              <Button sx={{ flexBasis: "1" }} onClick={() => {}}>
                {" "}
                등록순
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>{" "}
      <Box align="end" sx={{ p: 3 }}>
        <Button color="primary" variant="contained">
          <Link to="/admin/createBanner">공지작성</Link>
        </Button>
      </Box>
    </Box>
  </Box>
);

export default BannerToolbar;
