import { Grid, Typography } from "@mui/material";
import React from "react";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";

const AboutUs = () => {
  return (
    <Grid>
      <TopBackground />
      <Grid container maxWidth={700} margin="auto" spacing={5} my={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            Introducing <span>Roomy FINDER</span> app - the innovative room and
            roommate finder app designed to simplify your search for the perfect
            living space. Whether you're looking for an affordable room to rent
            or seeking a compatible roommate, Roomy FINDER is here to help.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            FIND ROOMS WITH EASE
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Our unique search engine allows you to browse through a large
            database of available rooms in your desired location. Specify your
            preferences such as price range, amenities, and location to narrow
            down your search and discover the best options that suit your needs.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            CONNECT WITH POTENTIAL ROOMMATES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Finding the right roommate is just as important as finding the right
            room. Roomy FINDER provides a platform for you to connect with
            potential roommates who share your interests, lifestyle, and
            compatibility. Browse through detailed profiles, including shared
            interests, habits, and preferences, to find someone who matches your
            vibe and living preferences.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Don't settle for less when it comes to your living situation.
            Download Roomy FINDER today and discover a world of possibilities in
            finding the perfect room and compatible roommates. Take the stress
            out of your search and start enjoying the benefits of shared living
            with Roomy FINDER!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            "Discover available rooms, connect with compatible roommates, and
            create your ideal living arrangement with the Roomy FINDER app."
          </Typography>
        </Grid>
      </Grid>
      <BottomBackground />
    </Grid>
  );
};

export default AboutUs;
