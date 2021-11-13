import axios from "axios";
import Swal from "sweetalert2";

export const usersRequest = (payload) => ({
  type: "USERS_REQUEST",
  payload,
});
export const loadingRequest = (payload) => ({
  type: "LOADING_REQUEST",
  payload,
});

export const getUsersGithub = (payload) => {
  return (dispatch) => {
    loadingRequest(true);
    axios
      .get(`https://api.github.com/search/users?q=${payload}&page=1`)
      .then((response) => {
        dispatch(usersRequest(response?.data?.items));
        if (response?.data.items.length === 0) {
          Swal.fire("Warnign!", "No possible results!", "warning");
        }
        loadingRequest(false);
      })
      .catch((err) => console.error(err));
  };
};
