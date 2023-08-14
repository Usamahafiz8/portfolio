import React from "react";
import { Box } from "@mui/material";
import { Timeline } from "@mui/lab";
import { info } from "../../info/Info";
import Timelineitem from "./Timelineitem";

const TimelinePage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      {/* <h1>Timeline</h1> */}
      <Timeline position="alternate">
        {info.timeline.length > 0 &&
          info.timeline.map((item, key) => {
            return (
              <Timelineitem
                title={item.title}
                emoji={item.emoji}
                color={item.color}
                description={item.description}
                year={item.year}
              />
            );
          })}
      </Timeline>
    </Box>
  );
};

export default TimelinePage;
