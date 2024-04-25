export async function POST(
  req: Request,
) {
  const data = await req.json();

  const user = {
    name: data.name
  };

  return Response.json(
    { message: "Hello " + user.name },
    { status: 200 }
  );
}