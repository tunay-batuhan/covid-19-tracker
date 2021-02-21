import React from "react";
import "./Cards.css";
import { Card, Typography, CardContent } from "@material-ui/core";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className="Cards">
      <Card className="Card">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <h2>Covid Cases</h2>
          </Typography>
          <Typography variant="h5" component="h2">
            <h2 style={{ color: "#2471A3" }}>{confirmed.value}</h2>
          </Typography>
          <Typography color="textSecondary">date</Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
          <h2>Covid Recovered</h2>
          </Typography>
          <Typography variant="h5" component="h2">
            <h2 style={{ color: "#2ECC71 " }}>{recovered.value}</h2>
          </Typography>
          <Typography color="textSecondary">{"date"}</Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
          <h2>Covid Deaths</h2>
          </Typography>
          <Typography variant="h5" component="h2">
            <h2 style={{ color: "#E74C3C" }}>{deaths.value}</h2>
          </Typography>
          <Typography color="textSecondary">{"date"}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
