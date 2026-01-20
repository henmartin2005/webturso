import { db } from "@/lib/turso";

export async function GET() {
  const res = await db.execute(
    "SELECT id, title, created_at FROM notes ORDER BY id DESC"
  );
  return Response.json(res.rows);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const title = body?.title;

  if (!title || typeof title !== "string") {
    return new Response("Bad Request", { status: 400 });
  }

  await db.execute({
    sql: "INSERT INTO notes(title) VALUES (?)",
    args: [title],
  });

  return Response.json({ ok: true });
}
