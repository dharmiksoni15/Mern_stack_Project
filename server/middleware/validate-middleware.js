const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody; // validated data
    next();
  } catch (error) {
    // Safe access to error messages
    if (error instanceof require("zod").ZodError) {
      // Use format() for safe structured errors
      const formattedErrors = error.format();

      console.log("Validation Errors:", formattedErrors);

      return res.status(400).json({
        msg: "Validation Failed",
        errors: formattedErrors, // send structured errors
      });
    }

    // If unknown error
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = validate;