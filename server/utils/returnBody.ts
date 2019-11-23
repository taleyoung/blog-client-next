export default function returnBody(
  ctx,
  status: number,
  data: { [key: string]: string } = {},
  err: string = ""
) {
  console.log("data", data);
  ctx.set("Content-Type", "application/json");
  ctx.body = {
    data,
    code: status,
    err
  };
  ctx.status = 200;
}
