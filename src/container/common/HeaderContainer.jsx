import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/common/Header";
import qs from "qs";
import { useHistory, withRouter } from "react-router";

const HeaderContainer = ({ location }) => {
  const { user, count } = useSelector((state) => state.user);
  const history = useHistory();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onSearch = (q) => {
    const query = qs.stringify({
      ...params,
      q: q,
    });
    history.push(`/market/?${query}`);
  };

  return (
    <Header user={user} count={count} onSearch={onSearch} query={params.q} />
  );
};

export default withRouter(HeaderContainer);
