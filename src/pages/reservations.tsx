import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Stack } from "@mui/material";
import NewReservationDialog from "@/components/NewReservationDialog";

type Props = {};

const Reservations = (props: Props) => {



  return (
    <Stack gap={4} sx={{
      flexGrow : 1
    }}>
      <NewReservationDialog />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin,listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
        }}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={[
          { title: "nice event", start: new Date(), resourceId: "a" },
        ]}
        // dateClick={() => {
        //   alert("You clicked an event ! nothing will happen, sadly.");
        // }}
      />
    </Stack>
  );
};

export default Reservations;
