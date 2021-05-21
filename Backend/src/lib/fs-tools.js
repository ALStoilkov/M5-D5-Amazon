import fs from "fs-extra";
// import { readJSON } from "fs-extra.readJSON";

import { fileURLToPath } from "url";

import { dirname, join } from "path";

const { readJSON, writeJSON, writeFile, createReadStream } = fs;

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data");

export const getProducts = async () =>
  await readJSON(join(dataFolderPath, "products.json"));

export const getReviews = async () =>
  await readJSON(join(dataFolderPath, "reviews.json"));

export const writeProducts = async (content) =>
  await writeJSON(join(dataFolderPath, "products.json"), content);

export const writeReviews = async (content) =>
  await writeJSON(join(dataFolderPath, "reviews.json"), content);

/* export const writeStudentsPictures = async (fileName, content) =>
  await writeFile(join(studentsFolderPath, fileName), content);
 */

export const getCurrentFolderPath = (currentFile) =>
  dirname(fileURLToPath(currentFile));

/* 
export const readStudentsPictures = (fileName) =>
  createReadStream(join(studentsFolderPath, fileName));
 */
