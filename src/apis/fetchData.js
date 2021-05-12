

const fetch = require("graphql-fetch")("https://api.inffdev.com/lobby");

export const getUpcomingMatches = () =>
  new Promise(async (resolve, reject) => {
    const query = `
    query q($token: String, $matchStatus: String!,$skip : Int, $limit : Int, $gameType: String!, $device: String!) {
        getUpcomingMatches(token: $token, matchStatus: $matchStatus,skip: $skip,limit: $limit, gameType: $gameType, device: $device) {
          _id
          matchFeedID
          matchTeamHomeShort
          matchTeamAwayShort
        }
      }
    `;
    const queryVars = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhODlhYzZlNmQwNDg5ODUyNDI1OGVkNGFiNGZjOTgxNiIsInVzZXJuYW1lIjoieXY0STlCZWYiLCJlbWFpbCI6InZpc2hhbC50YW53YW5pQGhkd29ya3MuaW4iLCJyb2xlcyI6InVzZXIiLCJzdGF0dXMiOnRydWUsImlhdCI6MTYyMDYyMzQ0MH0.HYbNK9TJnlFseEV11Eo9epQqtKup2AEBB6qI_Qnr1yc",
        matchStatus: "upcoming",
        skip: 0,
        limit: 50,
        gameType: "cricket",
        device: "MWEB",
    };
    try {
      resolve(await fetch(query, queryVars));
    } catch (err) {
      reject(err);
    }
  });
