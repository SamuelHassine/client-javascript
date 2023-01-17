"use strict";
import OpenCTIApiClient from "jscti";

// Variables
const api_url = "http://opencti:4000";
const api_token = "bfa014e0-e02e-4aa6-a42b-603b19dcf159";

// OpenCTI initialization
const opencti_api_client = new OpenCTIApiClient(api_url, api_token);

// Create URL observable with assigned score returning OpenCTI ID
const observable_type = "Url";
const observable_value = "www.filigran.io";
const observable_score = 50;

const mutation = `
  {
    stixCyberObservableAdd(
      type:"${observable_type}",
      ${observable_type}:{value:"${observable_value}"},
      x_opencti_score:${observable_score}
    ){
      id
    }
  }
`;

(async () => {
  let mutation_results = await opencti_api_client.mutation(mutation);
  console.log(mutation_results.data.stixCyberObservableAdd);
})();