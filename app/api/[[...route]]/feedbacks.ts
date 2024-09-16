import { feedbackFormSchema } from "@/schemas/index";
import { Hono } from "hono";

import { db } from "@/db/drizzle";
import { feedbacks } from "@/db/schema";

import { createId } from "@paralleldrive/cuid2";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { eq } from "drizzle-orm";

const app = new Hono()
  .get("/", async (c) => {
    // Handler to retrieve all feedback entries
    const data = await db
      .select({
        id: feedbacks.id,
        name: feedbacks.name,
        email: feedbacks.email,
        feedback: feedbacks.feedback,
      })
      .from(feedbacks);

    return c.json({ data });
  })
  .get(
    "/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().optional(),
      })
    ),
    async (c) => {
      // Handler to retrieve a specific feedback by ID
      const { id } = c.req.valid("param");

      if (!id) {
        return c.json({ error: "Missing id" }, 400);
      }

      const [data] = await db
        .select({
          id: feedbacks.id,
          name: feedbacks.name,
          email: feedbacks.name,
          feedbacks: feedbacks.feedback,
        })
        .from(feedbacks)
        .where(eq(feedbacks.id, id));

      if (!data) {
        return c.json({ error: "Not found" }, 404);
      }

      return c.json({ data });
    }
  )
  .post("/", zValidator("json", feedbackFormSchema), async (c) => {
    // Handler to create a new feedback entry
    const values = c.req.valid("json");

    console.log("Feedback info:", values);

    const [data] = await db
      .insert(feedbacks)
      .values({
        id: createId(),
        ...values,
      })
      .returning();

    return c.json({ data });
  });

export default app;
