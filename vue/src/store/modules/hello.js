import axios from "axios"
const state = {
  json: []
};

const mutations = {
  setJson(state, db) {
    state.json = db;
  }
};

const actions = {
  getJson(context) {
    axios.get("/json/getJson", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(function (res) {
        if (res.status === 200) {
          return res.data;
        }
      })
      .then(function (json) {
        //console.log(typeof Array.from(json), Array.from(json));
        context.commit("setJson", Array.from(json));
      });
  }
};

export default{
  state, mutations, actions
}