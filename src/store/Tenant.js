import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Studio",
  rentType: "Monthly",
  action: "HAVE ROOM",
  budget: null,
  description: null,
  movingDate: null,
  images: [],
  videos: [],
  amenities: [],
  interests: [],
  country: null,
  city: null,
  location: null,
  yourNationality: null,
  yourAstrologicalSign: null,
  yourAge: null,
  yourGender: "Male",
  yourOccupation: null,
  yourLanguages: [],
  yourLifeStyle: null,

  gender: "Male",
  lifeStyle: null,
  grouping: "Single",
  nationality: "Arab",
  numberOfPeople: null,
  smoking: false,
  drinking: false,
  visitors: false,
  cooking: false,
  pets: false,
  party: false,
};

const TenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    pets(state, action) {
      state.pets = action.payload;
    },
    party(state, action) {
      state.party = action.payload;
    },
    type(state, action) {
      state.type = action.payload;
    },
    rentType(state, action) {
      state.rentType = action.payload;
    },
    action(state, action) {
      state.action = action.payload;
    },
    budget(state, action) {
      state.budget = action.payload;
    },
    description(state, action) {
      state.description = action.payload;
    },
    movingDate(state, action) {
      state.movingDate = action.payload;
    },
    images(state, action) {
      state.images = action.payload;
    },
    videos(state, action) {
      state.videos = action.payload;
    },
    amenities(state, action) {
      state.amenities = action.payload;
    },
    interests(state, action) {
      state.interests = action.payload;
    },
    country(state, action) {
      state.country = action.payload;
    },
    city(state, action) {
      state.city = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    yourNationality(state, action) {
      state.yourNationality = action.payload;
    },
    yourAstrologicalSign(state, action) {
      state.yourAstrologicalSign = action.payload;
    },
    yourAge(state, action) {
      state.yourAge = action.payload;
    },
    yourGender(state, action) {
      state.yourGender = action.payload;
    },
    yourOccupation(state, action) {
      state.yourOccupation = action.payload;
    },
    yourLanguages(state, action) {
      state.yourLanguages = action.payload;
    },
    yourLifeStyle(state, action) {
      state.yourLifeStyle = action.payload;
    },
    lifeStyle(state, action) {
      state.lifeStyle = action.payload;
    },
    numberOfPeople(state, action) {
      state.numberOfPeople = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
    grouping(state, action) {
      state.grouping = action.payload;
    },
    nationality(state, action) {
      state.nationality = action.payload;
    },
    smoking(state, action) {
      state.smoking = action.payload;
    },
    drinking(state, action) {
      state.drinking = action.payload;
    },
    visitors(state, action) {
      state.visitors = action.payload;
    },
    cooking(state, action) {
      state.cooking = action.payload;
    },
  },
});

export const TenantActions = TenantSlice.actions;

export default TenantSlice.reducer;