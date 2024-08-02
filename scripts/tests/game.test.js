/**
 * @jest-environment jsdom
 */

const { beforeAll } = require("@jest/globals");

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});
