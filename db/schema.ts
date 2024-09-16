import { pgTable, text } from "drizzle-orm/pg-core";

export const feedbacks = pgTable("feedback", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  feedback: text("feedback").notNull(),
});
