import { objectType } from "@nexus/schema";

export const Position = objectType({
  name: "Position",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("company");
    t.date("startDate", {
      resolve: (parent) => new Date(parent.startDate)
    });
    t.nullable.date("endDate", {
      resolve: (parent) => parent.endDate ? new Date(parent.endDate) : null
    })
  }
})