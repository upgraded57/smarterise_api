import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { HttpExceptions } from "../functions/errorHandler";

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

export const UserSignin = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    throw new HttpExceptions("Email field is required", 400, null);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (email.includes("@smarterise.com")) {
    throw new HttpExceptions(
      "This email is reserved for admin use only",
      400,
      null
    );
  }

  // Check if user has account
  if (!user) {
    throw new HttpExceptions("User does not exist", 404, null);
  }

  return res.status(200).json({
    status: true,
    message: "User sign in successful",
    user,
  });
};

export const UserSignup = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!email && !name) {
    throw new HttpExceptions("Name and email fields are required", 400, null);
  }

  // Validate entry type
  const namePattern = /^[A-Za-z]+(\s[A-Za-z]+)+$/; // At least two words, letters only, space-separated
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation

  if (!namePattern.test(name)) {
    throw new HttpExceptions("Invalid name type supplied", 400, null);
  }

  if (!emailPattern.test(email)) {
    throw new HttpExceptions("Invalid email type supplied", 400, null);
  }

  if (email.includes("@smarterise.com")) {
    throw new HttpExceptions(
      "This email is reserved for admin use only",
      403,
      null
    );
  }

  // Check if user already exists
  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (userExists) {
    throw new HttpExceptions("User with email already exists", 409, null);
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
      },
    });

    return res.status(201).json({
      status: true,
      message: "User account created successfully",
      user: newUser,
    });
  } catch (error) {
    throw new HttpExceptions("Unable to create user account", 500, error);
  }
};

export const AdminSignin = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (email !== "admin@smarterise.com") {
    throw new HttpExceptions("Invalid email supplied", 400, null);
  }

  const admin = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return res.status(200).json({
    status: true,
    message: "Admin sign in successful",
    user: admin,
  });
};
