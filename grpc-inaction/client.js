const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDefinition);

const todoPackage = grpcObject.todoPackage;

const todoClient = new todoPackage.Todo(
  "localhost:40000",
  grpc.credentials.createInsecure()
);

const todoText = process.argv[2];

todoClient.createTodo(
  {
    id: -1,
    text: todoText,
  },
  (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("From server: ", JSON.stringify(response));
  }
);

todoClient.readTodos({}, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("From server: ", JSON.stringify(response));
});

const call = todoClient.readTodoStream();
call.on("data", (item) => {
  console.log("received item: ", JSON.stringify(item));
});

call.on("end", (e) => console.log("Server done!"));
