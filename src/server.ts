import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log('\n\t http://localhost:3000/?# \n');
});

export default server;
