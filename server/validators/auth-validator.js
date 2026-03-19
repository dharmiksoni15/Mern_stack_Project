const { z } = require("zod");

// Signup Validation Schema

const signupSchema = z.object({

  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must be 10 digits" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" })

});

module.exports = signupSchema;