import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({
  title,
  logo,
  desc,
  Position,
  width,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={logo} alt={logo} />
        {width ? (
          <CardContent sx={{ marginTop: "13em" }}>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              variant="body2"
              color="text.secondary"
            >
              Position:-
            </Typography>
            <Typography sx={{ color: "black", fontSize: "20px" }}>
              {Position}
            </Typography>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              variant="body2"
              color="text.secondary"
            >
              Work:-
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              variant="body2"
              color="text.secondary"
            >
              Position:-
            </Typography>
            <Typography sx={{ color: "black", fontSize: "20px" }}>
              {Position}
            </Typography>
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              variant="body2"
              color="text.secondary"
            >
              Work:-
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
  );
}
