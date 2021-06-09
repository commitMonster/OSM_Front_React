import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Address from "../../components/common/Address";
import {
  createDestination,
  getDestinationList,
  updateDestination,
  deleteDestination,
} from "../../modules/destination";
import { setDestination } from "../../modules/order";

const AddressContainer = ({ setOpen }) => {
  const { destinations, success } = useSelector((state) => state.destination);
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDestinationList());
  }, [dispatch]);

  useEffect(() => {
    if (loading && success) {
      dispatch(getDestinationList());
    }
  }, [success]);

  const onCreateDestination = (body) => {
    setLoading(true);
    dispatch(createDestination(body));
  };

  const onUpdateDestination = (body) => {
    setLoading(true);
    dispatch(updateDestination(body));
  };

  const ondeleteDestination = (id) => {
    setLoading(true);
    dispatch(deleteDestination(id));
  };

  const onSelect = (destination) => {
    dispatch(setDestination(destination));
    setOpen(false);
  };

  const setDefault = (before, next) => {
    setLoading(true);

    if (before)
      dispatch(
        updateDestination({ ...before, id: before.id, isDefault: false })
      );
    dispatch(updateDestination({ ...next, id: next.id, isDefault: true }));
  };

  if (!destinations) return null;

  return (
    <Address
      destinations={destinations}
      onCreateDestination={onCreateDestination}
      onUpdateDestination={onUpdateDestination}
      ondeleteDestination={ondeleteDestination}
      setDefault={setDefault}
      onSelect={onSelect}
    />
  );
};
export default AddressContainer;
