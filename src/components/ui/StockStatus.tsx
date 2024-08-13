import React from "react";
import { Chip } from "@mui/material";

const StockStatus = ({ stockStatus }: { stockStatus: boolean }) => {
  return (
    <div>
      {stockStatus ? (
        <Chip label="available" color="primary" sx={{ fontSize: 20 }} />
      ) : (
        <Chip label="out of stock" color="error" sx={{ fontSize: 20 }} />
      )}
    </div>
  );
};

export default StockStatus;
