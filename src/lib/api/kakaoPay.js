import axios from "axios";
import qs from "qs";

export const readyPay = async ({
  cid = "TC0ONETIME",
  partner_order_id = "00000001",
  partner_user_id = "test_user",
  item_name,
  quantity,
  total_amount,
  tax_free_amount = 0,
  approval_url = process.env.PUBLIC_URL + "http://localhost:3000/orderSuccess",
  cancel_url = process.env.PUBLIC_URL + "http://localhost:3000/order",
  fail_url = process.env.PUBLIC_URL + "http://localhost:3000/orderFailure",
}) => {
  const queryString = qs.stringify({
    cid,
    partner_order_id,
    partner_user_id,
    item_name,
    quantity,
    total_amount,
    tax_free_amount,
    approval_url,
    cancel_url,
    fail_url,
  });
  const response = await axios({
    url: `/v1/payment/ready?${queryString}`,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_ADMIN_KEY}`,
    },
  });
  return response;
};

export const approvePay = async ({
  cid = "TC0ONETIME",
  tid,
  partner_order_id = "00000001",
  partner_user_id = "test_user",
  pg_token,
}) => {
  const queryString = qs.stringify({
    cid,
    tid,
    partner_order_id,
    partner_user_id,
    pg_token,
  });
  const response = await axios({
    url: `/v1/payment/approve?${queryString}`,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_ADMIN_KEY}`,
    },
    proxy: false,
  });
  return response;
};
