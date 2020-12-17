import { decorateType } from "@nexus/schema";
import { GraphQLDate, GraphQLURL } from "graphql-scalars";

export const GQLDate = decorateType(GraphQLDate, {
  rootTyping: "Date",
  asNexusMethod: "date",
})

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
})

// this imports then imediately exports all exports from ./Query
export * from "./Query"
export * from "./Bio";
export * from "./Position";