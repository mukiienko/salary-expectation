import waitAsync from 'utils/waitAsync';

const linkedinAPI = {
  _condition() {
    return window.IN && window.IN.User && window.IN.API;
  },
  isAuthorized() {
    return waitAsync(this._condition, 300, () => window.IN.User.isAuthorized());
  },
  authorize() {
    return new Promise((resolve) => {
      window.IN.User.authorize(resolve);
    });
  },
  logout() {
    return new Promise((resolve) => {
      window.IN.User.logout(resolve);
      setTimeout(resolve, 2000);
    }).catch((error) => {
      console.log(error);
    });
  },
  getProfile() {
    return new Promise((resolve) => {
      window.IN.API.Profile(window.IN.User.getMemberId()).fields([
          "firstName","lastName","headline","positions:()","industry",
          "location:(name)","pictureUrl","publicProfileUrl", "skills",
          "educations","dateOfBirth"]).result(resolve)
    }).catch((error) => {
      console.log(error);
    });
  },
};

export default linkedinAPI;
