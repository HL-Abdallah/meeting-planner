import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MeetingType from "./MeetingType";
import { DatePicker } from "@mui/x-date-pickers";

type Props = {};

const NewReservationDialog = (props: Props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [startDate, setStartDate] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack alignItems={"flex-end"}>
      <Button color="success" variant="contained" onClick={handleClickOpen}>
        Add Reservation 🕖
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Make a new reservation 🟢"}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2 }}>
          <DialogContentText
            id="alert-dialog-description"
            display="flex"
            flexDirection={"column"}
            gap={2}
          >
            <MeetingType />
            <DatePicker 
            label="Start date"
            value={startDate}
  onChange={(startDate) => setStartDate(startDate)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default NewReservationDialog;
