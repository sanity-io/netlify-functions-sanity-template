/* eslint-disable */
const client = require("@sanity/client");

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "TODO" })
  };
};
