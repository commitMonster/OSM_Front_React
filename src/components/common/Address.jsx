import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddressEdit from "./AddressEdit";
import AddressList from "./AddressList";
import CustomButton from "./CustomButton";

const Address = ({
  destinations,
  onCreateDestination,
  onUpdateDestination,
  ondeleteDestination,
  setDefault,
  onSelect,
}) => {
  const [currentDestination, setCurrentDestination] = useState();
  const [mode, setMode] = useState("list");

  const handleSetDefault = (next) => {
    setDefault(
      destinations.find((item) => item.isDefault),
      next
    );
  };

  return (
    <>
      {mode === "list" ? (
        <AddressList
          destinations={destinations}
          setMode={setMode}
          ondeleteDestination={ondeleteDestination}
          handleSetDefault={handleSetDefault}
          setCurrentDestination={setCurrentDestination}
          onSelect={onSelect}
        />
      ) : (
        <AddressEdit
          mode={mode}
          setMode={setMode}
          currentDestination={currentDestination}
          onCreateDestination={onCreateDestination}
          onUpdateDestination={onUpdateDestination}
        />
      )}
    </>
  );
};
export default Address;
