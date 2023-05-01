import React from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../../store/Search";

const PropertyType = () => {
  const selectedItems = useSelector((state) => state.search.propertyTypes);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const selectedItem = event.target.value;
    if (selectedItems.includes(selectedItem)) {
      dispatch(
        SearchActions.propertyTypes(
          selectedItems.filter((item) => item !== selectedItem)
        )
      );
    } else {
      dispatch(SearchActions.propertyTypes([...selectedItems, selectedItem]));
    }
  };
  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Property Type
      </Typography>
      <Grid container direction="column" sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid
            item
            xs={6}
            sx={{
              height: "80px",
              border: selectedItems.includes("Regular")
                ? "2px solid purple"
                : "none",
              borderRadius: "5px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes("Regular")}
                  onChange={handleCheckboxChange}
                  value="Regular"
                  sx={{ display: "none" }}
                />
              }
              label="Regular"
              sx={{
                marginBottom: "10px",
                padding: "20px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "80px",
              border: selectedItems.includes("Partition")
                ? "2px solid purple"
                : "none",
              borderRadius: "5px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes("Partition")}
                  onChange={handleCheckboxChange}
                  value="Partition"
                  sx={{ display: "none" }}
                />
              }
              label="Partition"
              sx={{
                marginBottom: "10px",
                padding: "20px",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              height: "80px",
              border: selectedItems.includes("Master Room")
                ? "2px solid purple"
                : "none",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes("Master Room")}
                  onChange={handleCheckboxChange}
                  value="Master Room"
                  sx={{ display: "none" }}
                />
              }
              label="Master Room"
              sx={{
                marginBottom: "10px",
                padding: "20px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "80px",
              border: selectedItems.includes("Bed Space")
                ? "2px solid purple"
                : "none",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes("Bed Space")}
                  onChange={handleCheckboxChange}
                  value="Bed Space"
                  sx={{ display: "none" }}
                />
              }
              label="Bed Space"
              sx={{
                marginBottom: "10px",
                padding: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default PropertyType;
