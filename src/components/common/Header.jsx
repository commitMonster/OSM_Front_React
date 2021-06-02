/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Avatar, Container, TextField, useMediaQuery } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialUser, signout } from "../../modules/user";
import { useRef, memo, useState } from "react";

const sections = [
  { title: "Market", url: "market" },
  { title: "Events", url: "#" },
  { title: "Community", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "About", url: "#" },
];

function Header({ user, count, onSearch, query }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width: 568px)");
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

  return (
    <div
      css={{
        width: "100%",
        boxShadow: "0px 5px 11px 0px #E5E5E5",
        marginBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ alignItems: "center" }}>
          <Link
            to="/"
            css={
              isMobile &&
              css`
                flex: 1;
              `
            }
          >
            <Avatar src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png" />
          </Link>
          {!isMobile && (
            <Link
              to="/"
              css={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <img
                src="https://i.postimg.cc/zfDxr1p3/2021-05-01-10-05-53.png"
                alt="logo"
                style={{ width: "6rem" }}
              />
            </Link>
          )}

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
          <IconButton>
            <ShoppingCartIcon
              onClick={() => {
                history.push("/basket");
              }}
            />
          </IconButton>
          <Avatar
            sx={{
              bgcolor: "#FF7976",
              width: "2rem",
              height: "2rem",
              marginRight: "1rem",
            }}
          >
            {count}
          </Avatar>
          {user ? (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              sx={{ textDecoration: "none" }}
              onClick={() => {
                dispatch(signout());
                dispatch(initialUser());
                history.push("/");
              }}
            >
              SIGN OUT
            </Button>
          ) : (
            <Link to="/signin">
              <Button
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none" }}
              >
                Sign In
              </Button>
            </Link>
          )}
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              to={`/${section.url}`}
              key={section.title}
              style={{
                flex: 1,
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </div>
  );
}

export default memo(Header);
