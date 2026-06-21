import mongoose from "mongoose";

export function validateParams(params = {}) {
  for (const [field, value] of Object.entries(params)) {
    if (typeof value !== "string" || value.trim().length === 0) {
      return { success: false, field };
    }
  }

  return { success: true };
}

export function validateId(id) {
  return { success: mongoose.Types.ObjectId.isValid(id) };
}
