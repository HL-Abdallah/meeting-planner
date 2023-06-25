import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Paper, Stack } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import TvIcon from "@mui/icons-material/Tv";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="sticky" color="inherit">
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Meeting Planner
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button startIcon={<GroupsIcon />} href="/meetings">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    Meetings
                  </Typography>
                </Button>
                <Button startIcon={<MeetingRoomIcon />} href="/salles">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    Salles
                  </Typography>
                </Button>
                <Button startIcon={<TvIcon />} href="/equipments">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    Equipements
                  </Typography>
                </Button>
                <Button startIcon={<BookmarkAddIcon />} href="/reservations">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    Reservations
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            p: 2,
            m: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
export default Layout;
