module.exports = (res, req, next) => {
  function validEmail(userEmail) {
    let result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      userEmail
    );
  }
  validEmail();
};
