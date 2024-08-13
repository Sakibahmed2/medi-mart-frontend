import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TNavbarLinkProps = {
  label: string;
  path: string;
};

const NavLink = ({ label, path }: TNavbarLinkProps) => {
  const pathname = usePathname();

  return (
    <Typography
      component={Link}
      href={`${path}`}
      sx={{
        borderBottom: "2px solid white",
        borderRadius: "3px",
        px: "10px",
        "&:hover": {
          px: "10px",
          borderBottom: "2px solid gray",
          borderRadius: "3px",
          cursor: "pointer",
          transition: "all 0.5s",
        },
        ...(pathname === path
          ? {
              color: "primary.main",
            }
          : {}),
      }}
    >
      {label}
    </Typography>
  );
};

export default NavLink;
