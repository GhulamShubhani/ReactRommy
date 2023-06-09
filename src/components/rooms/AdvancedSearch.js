import React, { useState } from "react";
import AdvancedSearchBg from "../../assets/AdvanceSearchBg.jpg";
import { Grid, Paper, Typography, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../store/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Budget from "./AdvancedSearchComponents/Budget";
import PropertyType from "./AdvancedSearchComponents/PropertyType";
import Gender from "./AdvancedSearchComponents/Gender";
import PreferredRentType from "./AdvancedSearchComponents/PreferredRentType";
import City from "./AdvancedSearchComponents/City";
import Location from "./AdvancedSearchComponents/Location";
import { AdvanceSearchActions } from "../../store/AdvanceSearch";

const AdvancedSearch = () => {
  const navigate = useNavigate();
  const [advance, setAdvance] = useState(false);
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.room.roomsType);
  const [loading, setLoading] = useState(false);
  const type = useSelector((state) => state.advanceSearch.propertyType);
  const minBudget = useSelector((state) => state.advanceSearch.minBudget);
  const maxBudget = useSelector((state) => state.advanceSearch.maxBudget);
  const gender = useSelector((state) => state.advanceSearch.gender);
  const preferredRentType = useSelector(
    (state) => state.advanceSearch.preferredRentType
  );
  const AdvanceSearchOptionsHandler = () => {
    setAdvance(!advance);
  };

  const handleClearFilter = () => {
    dispatch(AdvanceSearchActions.clear());
  };

  const advanceSearchHandler = async () => {
    try {
      setLoading(true);
      const obj = { countryCode: "AE" };

      if (type) {
        obj.type = type;
      }

      // if (minBudget) {
      //   obj.minBudget = minBudget;
      // }

      // if (maxBudget) {
      //   obj.maxBudget = maxBudget;
      // }

      if (gender) {
        obj.gender = gender;
      }
      if (preferredRentType) {
        obj.preferedRentType = preferredRentType;
      }

      if (Object.keys(obj).length > 0) {
        const { data } = await axios.post(
          `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/available`,
          obj
        );

        // const filteredData = data.map((room) => {
        //   if (minBudget && !maxBudget && room.monthlyPrice > minBudget) {
        //     console.log(room);
        //     return room;
        //   } else if (maxBudget && !minBudget && room.monthlyPrice < maxBudget) {
        //     console.log(room);
        //     return room;
        //   } else if (
        //     minBudget &&
        //     maxBudget &&
        //     room.monthlyPrice > minBudget &&
        //     room.monthlyPrice < maxBudget
        //   ) {
        //     console.log(room);
        //     return room;
        //   }
        // });

        // console.log(filteredData);
        dispatch(SearchActions.availableRooms(data));
      } else {
        console.log("obj is empty");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      sx={{
        height: "100%",
        p: 4,
        background: "#fff",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bolder", marginBottom: "1rem" }}
      >
        Advanced Search
      </Typography>
      <PropertyType />
      <PreferredRentType />
      <Gender />
      <Budget />
      <City />
      <Location />

      <Grid
        container
        justifyContent="center"
        mt={2}
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={handleClearFilter}
            sx={{
              bgcolor: "orange",
              color: "#fff",
              "&:hover": {
                bgcolor: "darkorange",
                color: "#fff",
              },
            }}
          >
            Clear Filter
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={advanceSearchHandler}
            disabled={loading}
            sx={{
              bgcolor: "orange",
              color: "#fff",
              "&:hover": {
                bgcolor: "darkorange",
                color: "#fff",
              },
            }}
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdvancedSearch;
