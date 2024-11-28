/*!
 * string-integer <https://github.com/KitsonBroadhurst/string-integer>
 *
 * Copyright (c) 2024-2025, Kitson Broadhurst.
 * Licensed under the MIT license.
 */

export const stringInteger = (number) => {
  if (typeof number === "number") {
    const int = Math.floor(number);
    console.log("🪿 Only a silly goose would use this library!");
    return `${int}`;
  } else {
    throw new Error("😱 Why are you even using this library?");
  }
};
