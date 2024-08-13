"use client";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import NavItems from "./NavItems";

function MenuNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
              <Typography
                variant="h4"
                component={Link}
                href={"/"}
                fontWeight={600}
                sx={{
                  color: "black",
                }}
              >
                Medi
                <Box component="span" color="primary.main">
                  Mart
                </Box>
              </Typography>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavItems />
            </Menu>
          </Box>

          {/* desktop view */}
          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="h4"
            component={Link}
            href={"/"}
            fontWeight={600}
            color={"black"}
          >
            Medi
            <Box component="span" color="primary.main">
              Mart
            </Box>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            <NavItems />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuNavBar;
