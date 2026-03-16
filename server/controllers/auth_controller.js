// /api/auth route handles
const home = async (req, res) => {
  try {
    res.send("<h1>Welcome to home controller</h1>");
  } catch (error) {
    res.send("page not found");
  }
};

// /api/auth/register route handle

const register = async (req, res) => {
  try {
    res.send("<h1>User Registerd succesfully</h1>");
  } catch (error) {
    res.send("page not found");
  }
};

module.exports = {
  home,
  register,
};
