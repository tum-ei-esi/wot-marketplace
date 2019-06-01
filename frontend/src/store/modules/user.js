import * as Api from '@/api/Api';

export default {
    namespaced: true,
    state: {
        currentUser: 
        { name: "Musti", firstName: "Manuela", lastName: "Mustermann", email: "manuela-mustermann@wot.com",
        implementations: [
            {
              topic: ["actuator", "other", "sensor", "robotics"],
              tags: ["python", "sensehat"],
              _id: "5cb1c65f1c9d440000eb922d",
              name: "SenseHAT_python",
              shortDescription: "senseHAT WoT implementation in python",
              longDescription: "sit ipsum exercitation",
              github: "https://github.com/DK<~LeZK3s",
              implementationType: "code",
              platform: "arduino",
              complexity: "expert",
              td: {}
            },
            {
              topic: ["actuator", "other", "sensor", "robotics"],
              tags: ["python", "sensehat"],
              _id: "5cb1c65f1c9d440000eb922d",
              name: "SenseHAT_python",
              shortDescription: "senseHAT WoT implementation in python",
              longDescription: "sit ipsum exercitation",
              github: "https://github.com/DK<~LeZK3s",
              implementationType: "code",
              platform: "arduino",
              complexity: "expert",
              td: {}
            },
            {
              topic: ["actuator", "other", "sensor", "robotics"],
              tags: ["python", "sensehat"],
              _id: "5cb1c65f1c9d440000eb922d",
              name: "SenseHAT_python",
              shortDescription: "senseHAT WoT implementation in python",
              longDescription: "sit ipsum exercitation",
              github: "https://github.com/DK<~LeZK3s",
              implementationType: "code",
              platform: "arduino",
              complexity: "expert",
              td: {}
            },
            {
              topic: ["actuator", "other", "sensor", "robotics"],
              tags: ["python", "sensehat"],
              _id: "5cb1c65f1c9d440000eb922d",
              name: "SenseHAT_python",
              shortDescription: "senseHAT WoT implementation in python",
              longDescription: "sit ipsum exercitation",
              github: "https://github.com/DK<~LeZK3s",
              implementationType: "code",
              platform: "arduino",
              complexity: "expert",
              td: {}
            }
          ] },
        newUser: {},
        isUserLoggedIn: true
    },
    actions: {
        async register({ commit }, payload) {
            if (payload.newUser) {
                commit('setNewUser', payload.newUser);
            } else {
                return;
            }
            let newUser = await Api.register({ newUser: payload.newUser });
            if (newUser) {
                commit('setCurrentUser', newUser);
            } else {
                return "error";
            }
        },
        async login({ commit }, payload) {
            let user = await Api.login({ email: payload.email, password: payload.password });
            if (user) {
                commit('setCurrentUser', user);
                return user;
            } else {
                return "error";
            }
        },
        async logout({ commit, state }) {
            let currentUser = state.currentUser;
            if (currentUser) {
                await Api.logout(currentUser);
                commit('setUserLoggedOut')
            } else {
                return;
            }
        }
    },
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload;
        },
        setNewUser(state, payload) {
            state.newUser = payload;
        },
        setUserLoggedIn(state, payload) {
            state.isUserLoggedIn = payload;
        },
        setUserLoggedOut(state) {
            state.isUserLoggedIn = false;
            state.currentUser = null;
        }
    },
    getters: {
        getCurrenUser: state => { return state.currentUser; },
        getUserLoggedIn: state => { return state.isUserLoggedIn; },
        getNewUser: state => { return state.newUser; }
    }
}