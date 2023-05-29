import React from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";

const PropertyType = () => {
  const selectedPropertyType = useSelector(
    (state) => state.advanceSearch.propertyType
  );
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const selectedItem = event.target.value;

    if (selectedPropertyType === selectedItem) {
      dispatch(AdvanceSearchActions.propertyType(null));
    } else {
      dispatch(AdvanceSearchActions.propertyType(selectedItem));
    }
  };

  const checkboxContainerStyle = {
    height: "80px",
    borderRadius: "20px",
    // textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#f3eef1",
  };

  const selectedCheckboxStyle = {
    border: "2px solid #800080",
  };

  const checkboxLabelStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Property Type
      </Typography>

      <Grid container direction="column" sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              sx={{
                ...checkboxContainerStyle,
                ...(selectedPropertyType === "Room" && selectedCheckboxStyle),
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPropertyType === "Room"}
                    onChange={handleCheckboxChange}
                    value="Room"
                    sx={{ display: "none" }}
                  />
                }
                label="Room"
                sx={checkboxLabelStyle}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              sx={{
                ...checkboxContainerStyle,
                ...(selectedPropertyType === "Partition" &&
                  selectedCheckboxStyle),
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPropertyType === "Partition"}
                    onChange={handleCheckboxChange}
                    value="Partition"
                    sx={{ display: "none" }}
                  />
                }
                label="Partition"
                sx={checkboxLabelStyle}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              sx={{
                ...checkboxContainerStyle,
                ...(selectedPropertyType === "Master Room" &&
                  selectedCheckboxStyle),
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPropertyType === "Master Room"}
                    onChange={handleCheckboxChange}
                    value="Master Room"
                    sx={{ display: "none" }}
                  />
                }
                label="Master Room"
                sx={checkboxLabelStyle}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              sx={{
                ...checkboxContainerStyle,
                ...(selectedPropertyType === "Bed" && selectedCheckboxStyle),
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPropertyType === "Bed"}
                    onChange={handleCheckboxChange}
                    value="Bed"
                    sx={{ display: "none" }}
                  />
                }
                label="Bed"
                sx={checkboxLabelStyle}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default PropertyType;
