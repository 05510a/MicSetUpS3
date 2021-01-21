import {
  ADD_PROFILE,
  DELETE_PROFILE,
  DUPLICATE,
  EDIT_NAME,
  GET_EDIT_NAME,
  GET_NAME,
} from "../constant/Profile";

const stateDefault = {
  Profile: [
    {
      name: "Profile default",
      soLuong: 0,
    },
    {
      name: "Profile 2",
      soLuong: 0,
    },
    {
      name: "Profile 3",
      soLuong: 0,
    },
    {
      name: "Profile 4",
      soLuong: 0,
    },
    {
      name: "Profile 5",
      soLuong: 0,
    },
    {
      name: "Profile 6",
      soLuong: 0,
    },
    {
      name: "Profile 7",
      soLuong: 0,
    },
    {
      name: "Profile 8",
      soLuong: 0,
    },
  ],
  GetName: { name: "Profile default", index: 0 },
  count: 1,
  profileNameShow: "Profile default",
  countDuplicate: 1,
  getEditName: "",
};

const ProfileReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_NAME: {
      state.GetName.name = action.payload;
      state.GetName.index = action.index;
      state.profileNameShow = action.payload;
      state.countDuplicate = 1;
      return { ...state };
    }
    case DELETE_PROFILE: {
      const profileUpdate = [...state.Profile];
      const index = profileUpdate.findIndex(
        (profile) => profile.name === state.GetName.name
      );
      if (index !== -1) {
        profileUpdate.splice(index, 1);
      }
      if (index === profileUpdate.length) {
        let showName = state.Profile[index - 1].name;
        state.profileNameShow = showName;
        state.GetName.name = showName;
        state.GetName.index = index - 1;
      } else {
        let showName = state.Profile[index + 1].name;
        state.profileNameShow = showName;
        state.GetName.name = showName;
        state.GetName.index = index;
        console.log("profile", state.profileNameShow);
      }

      state.Profile = profileUpdate;

      return { ...state };
    }
    case ADD_PROFILE: {
      const newProfile = { name: "NewProfile", soLuong: 0 };
      const profileUpdate = [...state.Profile];
      const index = profileUpdate.findIndex(
        (profile) => profile.name === newProfile.name
      );

      if (index !== -1) {
        newProfile.name = "NewProfile" + " " + `(${state.count})`;

        profileUpdate.push(newProfile);
        state.profileNameShow = newProfile.name;

        state.GetName.index = profileUpdate.length - 1;

        state.count += 1;
        console.log("index2", state.GetName.index);
      } else {
        profileUpdate.push(newProfile);
        state.profileNameShow = newProfile.name;
        state.GetName.index = profileUpdate.length - 1;
        // console.log("index1", state.GetName.index);
      }
      state.Profile = profileUpdate;
      return { ...state };
    }
    case DUPLICATE: {
      const dulicateProfile = { name: `${state.GetName.name}`, soLuong: 0 };
      const profileUpdate = [...state.Profile];

      const index = profileUpdate.findIndex(
        (profile) => profile.name === state.GetName.name
      );
      console.log("name", profileUpdate);
      if (index !== -1) {
        if (state.GetName !== "NewProfile") {
          dulicateProfile.name =
            state.GetName.name + " " + `(${state.countDuplicate}) `;
          profileUpdate.push(dulicateProfile);

          state.profileNameShow = dulicateProfile.name;
          state.countDuplicate += 1;
        }
      }
      state.Profile = profileUpdate;
      return { ...state };
    }
    case GET_EDIT_NAME: {
      state.getEditName = action.payload;

      console.log("changeName", state.getEditName);
      return { ...state };
    }
    case EDIT_NAME: {
      const profileUpdate = [...state.Profile];

      const index = profileUpdate.findIndex(
        (profile) => profile.name === state.GetName.name
      );
      if (index !== -1) {
        profileUpdate[index].name = state.getEditName;
        state.profileNameShow = profileUpdate[index].name;
        state.GetName.name = state.getEditName;
      }

      state.Profile = profileUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};
export default ProfileReducer;
