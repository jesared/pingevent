import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Event, ListAltOutlined, TableChart } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { deepOrange, green, pink } from '@mui/material/colors';

export default function BasicTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: pink[500] }} >
          
          
  <ListAltOutlined />

          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        <Typography variant="h6" component="span">Gerer son événement en ligne
        </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
        <TimelineDot sx={{ bgcolor: green[500] }}>
          <TableChart  />
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Ajouter des épreuves
            </Typography> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: deepOrange[500] }} >
          <Event />
            
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent >
        <Typography variant="h6" component="span">
          Création d'un événement Ping
          </Typography>
          </TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
}
