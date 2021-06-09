import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import Order from "../../components/order/Order";
import { setTid } from "../../modules/order";
import qs from "qs";

const OrderContainer = () => {
  const { order, list, destination } = useSelector((state) => state.order);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  function onClickPayment() {
    if (!destination) {
      alert("배송지를 선택해주세요!");
      return;
    }
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp61121966");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakaopay", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: order.totalPrice + order.delivery, // 결제금액
      name: order.item_name, // 주문명
      buyer_name: "유저", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      alert("결제 성공");
      dispatch(setTid(response.pg_tid));
      if (params.once) {
        history.push("/orderSuccess?once=true");
      } else {
        history.push("/orderSuccess");
      }
    } else {
      alert(`결제 실패: ${error_msg}`);
      history.push("/");
    }
  }

  if (!order) return null;

  return (
    <Order
      order={order}
      onClickPayment={onClickPayment}
      destination={destination}
    />
  );
};

export default OrderContainer;
