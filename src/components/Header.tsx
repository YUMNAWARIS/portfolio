"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { ColorModeContext } from "@/theme";
import GradientText from "@/components/GradientText";
import { siteSections } from "@/data/nav";

export default function Header() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: 1,
        borderColor: "divider",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "linear-gradient(90deg, rgba(156,39,176,0.18), rgba(25,118,210,0.18))",
          opacity: 0.5,
        },
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            <GradientText variant="h6" component="div" sx={{ fontWeight: 800 }}>
              YW
            </GradientText>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {siteSections.map((section) => (
              <Button key={section.href} component={Link} href={section.href} color="inherit">
                {section.label}
              </Button>
            ))}
          </Box>

          <IconButton color="inherit" onClick={colorMode.toggleColorMode} aria-label="toggle theme" sx={{ ml: 1 }}>
            {mounted ? (theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />) : <Brightness4Icon />}
          </IconButton>

          <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }} color="inherit" onClick={toggleDrawer(true)} aria-label="open navigation">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {siteSections.map((section) => (
              <ListItem key={section.href} disablePadding>
                <ListItemButton component={Link} href={section.href}>
                  <ListItemText primary={section.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
