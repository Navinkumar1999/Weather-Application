import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function ({
  icon,
  tempC,
  tempF,
  condition,
  windSpeed,
  humidity,
  cloudCoverage,
  lastUpdated,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh", // Adjust the height as needed
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          width: 300,
          p: "2",
        }}
      >
        <CardContent>
          <img
            src={icon}
            alt="weather condition"
            sx={{ marginright: "50px" }}
          />

          <Typography>
            Temperature: {tempC}°C / {tempF}°F
          </Typography>

          <Typography>Condition: {condition}</Typography>
          <Typography>Wind Speed: {windSpeed} km/h</Typography>
          <Typography>
            <span style={{ padding: "5%" }}>Humidity:</span> {humidity}%
          </Typography>
          <Typography>Cloud Coverage:{cloudCoverage}%</Typography>
          <Typography>Last Updated:{lastUpdated}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
