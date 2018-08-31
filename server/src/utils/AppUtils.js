function isLoggedIn(cookie) {
    return typeof cookie !== typeof undefined && typeof cookie["authenticated"] !== typeof undefined && cookie["authenticated"] !== "false";
};

function logger() {
  return console;   
}

export {
    isLoggedIn,
    logger
}