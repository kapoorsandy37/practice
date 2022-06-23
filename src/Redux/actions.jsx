import axios from "axios";

export function loadPost(data) {
  return {
    type: "LOAD_DATA",
    data: data,
  };
}

export function setLoadingState(check) {
  return {
    type: "SET_LOADING_STATE",
    condition: check,
  };
}

// Fetching the Data

export function startLoadingData(name) {
  return function (dispatch) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e9c445513403b4745353fde9530c88ea`
      )
      .then(({ data }) => {
        dispatch(loadPost(data));
      })
      .catch((err) => {
        dispatch(loadPost({}));
      });
  };
}
