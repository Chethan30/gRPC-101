const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDefinition);

const todoPackage = grpcObject.todoPackage;

// Creating a gRPC HTTP/2 server
const server = new grpc.Server();
server.bindAsync(
  "0.0.0.0:40000",
  grpc.ServerCredentials.createInsecure(),
  (err, result) => (!err ? server.start() : logger.error(err))
);

// Implementing the service, adding service from the proto file
server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  readTodos: readTodos,
  readTodoStream: readTodoStream,
});

const todos = [];
function createTodo(call, callback) {
  const todoItem = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(todoItem);
  //   console.log(call);

  callback(null, todoItem);
}

function readTodos(call, callback) {
  // IMPORTANT: Callback object should match the response object in the proto file
  callback(null, { items: todos });
}

function readTodoStream(call, callback) {
  // Stream data one item at a time
  todos.forEach((todo) => {
    call.write(todo);
  });
  call.end();
}
