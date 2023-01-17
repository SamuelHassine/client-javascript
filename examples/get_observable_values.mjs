"use strict";
import OpenCTIApiClient from "jscti";

// Variables
const api_url = "http://opencti:4000";
const api_token = "bfa014e0-e02e-4aa6-a42b-603b19dcf159";

// OpenCTI initialization
const opencti_api_client = new OpenCTIApiClient(api_url, api_token);

// Get exact URL match returning OpenCTI ID and score
const observable_type = "Url";
const observable_value = "www.filigran.io";

const query = `
  {
    stixCyberObservables(filters:[
      {key:entity_type, values:["${observable_type}"]},
      {key:value, values:["${observable_value}"]}
    ]){
      edges{
        node{
          id
          x_opencti_score
        }
      }
    }
  }
`;

(async () => {
    let query_results = await opencti_api_client.query(query);
    console.log(query_results.data.stixCyberObservables.edges);
  })();