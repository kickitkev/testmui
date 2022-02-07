import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";
import VacanciesImage from "./assets/my-vacancies-dashboard.svg";
import CardImage from "./components/CardImage";
import CardBasic from "./components/CardBasic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { shadows } from "@mui/system";

const theme = createTheme({
  shape: {
    borderRadius: "8px",
  },
  palette: {
    primary: {
      main: "#02ACEC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardImage
              component="img"
              image={VacanciesImage}
              alt="My Vacancies"
              heading="My Vacancies"
            ></CardImage>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <CardBasic heading="Upcoming Events"></CardBasic>
              </Grid>
              <Grid item xs={12}>
                <CardBasic heading="Notifications"></CardBasic>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End Grid Container */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
