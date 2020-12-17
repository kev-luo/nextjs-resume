import { objectType } from "@nexus/schema";
import { differenceInYears, differenceInMonths } from "date-fns";

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
    t.int("years", {
      resolve: ({ startDate, endDate }) => {
        return (
          differenceInYears(
            endDate ? new Date(endDate) : new Date(),
            new Date(startDate)
          )
        )
      }
    });
    t.int("months", {
      resolve: ({ startDate, endDate }) => {
        return (
          differenceInMonths(
            endDate ? new Date(endDate) : new Date(),
            new Date(startDate)
          ) % 12
        )
      }
    })
  }
})