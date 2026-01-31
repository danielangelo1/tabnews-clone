import { Config } from "jest";
import nextJest from "next/jest";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig: Config = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  // setupFiles: ["<rootDir>/src/tests/jest-setup-tests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(jestConfig);
