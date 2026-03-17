// /api/auth route handles
const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to home controller" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// /api/auth/register route handle
const register = async (req, res) => {
  try {
    console.log(req.body);
    
    res.status(200).json({ message: req.body});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  home,
  register,
};
