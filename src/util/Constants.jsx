const APP_ROOT_URL = getBaseAppUrl();
const API_ROOT_URL = getBaseApiUrl();
const APP_HOSTNAME = getAppHostName();

function getBaseAppUrl(){
    return window.location.protocol + "//" + window.location.host;
}

function getBaseApiUrl() {
  switch (process.env.NODE_ENV) {
    case "development":
    case "test":
    return "http://bwoestmanapi.test/";
    case "production":
    return "https://api.bwoestman.com"
    default:
      break;
  }
}

function getAppHostName() {
  const hostname = window.location.host;
  return hostname;
}

export const Constants = {
    APP_ROOT_URL: APP_ROOT_URL,
    API_ROOT_URL: API_ROOT_URL,
    APP_HOSTNAME: APP_HOSTNAME
}