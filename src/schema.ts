import { makeSchema, declarativeWrappingPlugin } from "@nexus/schema";
import path from "path";
import * as types from "./allTypes";

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "src", "generated", "nexus.ts"),
  },
  // define sources of where to load type definitions from
  typegenAutoConfig: {
    sources: [{
      alias: "interfaces",
      source: path.join(process.cwd(), "src", "interfaces.ts"),
      typeMatch: (type) => new RegExp(`(${type}Interface)`)
    }],
    backingTypeMap: {
      Date: "Date",
      URL: "URL",
    },
    debug: process.env.NODE_ENV === "development"
  },

  // allow nullable position enddate
  plugins: [
    declarativeWrappingPlugin(),
  ]
})