import Amplify from "@aws-amplify/core";
import Storage from "@aws-amplify/storage";
import Auth from '@aws-amplify/auth';

const BASE_URL =
  "https://onetwosmile-cms-dev.s3.eu-central-1.amazonaws.com/public/";

Amplify.configure({
  Auth: {
    identityPoolId: "eu-central-1:a3612f81-da70-4fd3-b809-f2a2c7a3e029",
    region: "eu-central-1"
  },
  Storage: {
    bucket: "onetwosmile-cms-dev",
    region: "eu-central-1"
  }
});

function uploadFile({ name, file, contentType }) {
  return Storage.put(name, file, {
    contentType
  });
}

function keyToUrl(key) {
  return `${BASE_URL}${key}`;
}

export { uploadFile, keyToUrl };
