import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Stack } from "@mui/material";

type Props = {};

const Reservations = (props: Props) => {
  return (
    <Stack gap={4} sx={{
      flexGrow : 1
    }}>
      <Stack alignItems={"flex-end"}>
        <Button color="success" variant="contained">
          Add Reservation ➕
        </Button>
      </Stack>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={[
          { title: "nice event", start: new Date(), resourceId: "a" },
        ]}
        dateClick={() => {
          alert("click");
        }}
      />
    </Stack>
  );
};

export default Reservations;
