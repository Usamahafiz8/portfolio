import React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import Typography from '@mui/material/Typography'
import ApartmentIcon from '@mui/icons-material/Apartment';

const Timelineitem = (props) => {
  return (
    <TimelineItem key={props.title}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color={props.color}
        >
          {props.year}
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: props.color }} />
        <TimelineDot sx={{ bgcolor: props.color }}>
          {props.emoji}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Timelineitem;
