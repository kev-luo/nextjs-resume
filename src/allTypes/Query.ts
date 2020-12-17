import { queryType, idArg } from "@nexus/schema";
import { data } from "../data";
import { Bio, Position } from "./index";

export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      description: "Get all bio information",
      resolve: () => data.bio
    });

    t.list.field("positions", {
      type: Position,
      description: "Find all positions",
      resolve: () => data.positions
    })

    t.nullable.field("position", {
      type: Position,
      description: "Find a position by ID",
      args: { id: idArg() },
      resolve: (parent, { id }: { id: string }, ctx) => data.positions.find(position => position.id === id)
    })
  }
})