"use strict";
import OpenCTIApiClient from "jscti";

// Variables
const api_url = "http://opencti:4000";
const api_token = "bfa014e0-e02e-4aa6-a42b-603b19dcf159";

// OpenCTI initialization
const opencti_api_client = new OpenCTIApiClient(api_url, api_token);

// Create artifact returning OpenCTI ID
// const content = readFileSync("/path/to/a/file");
const content = "example text file content";
const blob = new Blob([content], { type: "text/ascii" });
blob.name = "example.txt";

const mutation = `
  ArtifactImport($file: Upload!) {
    artifactImport(file: $file) {
      id
    }
  }
`;

const variables = { file: blob };

let mutation_results = await opencti_api_client.mutation(mutation, variables);

console.log(mutation_results.data.artifactImport);
