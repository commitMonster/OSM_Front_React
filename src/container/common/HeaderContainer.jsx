import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/common/Header";
import qs from "qs";
import { useHistory, withRouter } from "react-router";

const HeaderContainer = ({ location }) => {
  const { user, count } = useSelector((state) => state.user.user);
  const history = useHistory();

  const {
    q,
    orderBy = "createdAt",
    sort = "desc",
    isPriceRange,
    minPrice,
    maxPrice,
    categoryId = "",
    isDeleted,
    pageSize = 10,
    page = 1,
  } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onSearch = (q) => {
    const query = qs.stringify({
      q: q,
      orderBy,
      sort,
      isPriceRange,
      minPrice,
      maxPrice,
      categoryId,
      isDeleted,
      pageSize,
      page,
    });
    history.push(`/market/?${query}`);
  };

  return <Header user={user} count={count} onSearch={onSearch} />;
};

export default withRouter(HeaderContainer);