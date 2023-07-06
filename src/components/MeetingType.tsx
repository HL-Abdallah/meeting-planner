import { axios } from "@/utils/fetch";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

type Props = {};

const MeetingType = (props: Props) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get("/meeting").then((r) => {
      const typesMeeting = r.data.map((item:any) => item.typeMeeting);
      console.log('typesMeeting', typesMeeting);

      setData(typesMeeting);

    });
  }, []);

  if (!data) {
    return <b>Fetching data ...</b>;
  }

  return (
    <Autocomplete
      options={data}
      renderInput={(params) => <TextField {...params} label="Type Meeting" />}
    />
  );
};

export default MeetingType;
