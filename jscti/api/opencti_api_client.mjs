"use strict";

import { createClient } from "@urql/core";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

class OpenCTIApiClient {
  constructor(url, token) {
    if (url == null || url == undefined) {
      throw new Error("An OpenCTI URL must be set");
    }
    if (token == null || token == undefined || token == "ChangeMe") {
      throw new Error("An OpenCTI access token must be set");
    }

    // Define API
    this.api_url = url + "/graphql";
    this.api_token = token;
    this.request_headers = { headers: { Authorization: "Bearer " + token } };

    try {
      this.client = createClient({
        url: this.api_url,
        exchanges: [multipartFetchExchange],
        fetchOptions: this.request_headers,
      });
    } catch (e) {
      throw new Error(
        `Error while attempting to create client connection to OpenCTI: ${e}`
      );
    }
  }

  async query(gql, variables=undefined) {
    try {
      let data = await this.client.query(`query ${gql}`, variables).toPromise();
      return data;
    } catch (e) {
      throw new Error(`Error while querying OpenCTI: ${e}`);
    }
  }

  async mutation(gql, variables=undefined) {
    try {
      let data = await this.client.mutation(`mutation ${gql}`, variables).toPromise();
      return data;
    } catch (e) {
      throw new Error(`Error while applying mutation to OpenCTI: ${e}`);
    }
  }
}

export default OpenCTIApiClient;
