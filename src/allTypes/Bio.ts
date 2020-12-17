import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("tagline");
    t.string("email");
    t.string("objective");
    t.url("github", {resolve: (parent) => new URL(parent.github)});
    t.url("website", {resolve: (parent) => new URL(parent.website)});
    t.url("linkedin", {resolve: (parent) => new URL(parent.linkedin)});
  }
})