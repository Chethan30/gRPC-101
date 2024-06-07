## JSON anf Arrays

The file index.js contains a simple of a node/js program with an array of employees.

We have added 3 employees, and when this is written to a file using fs, as JSON data it occupies `125B` on the disk.

This is alot for just 3 employees, expecially when sent over HTTP or stored in a database.

JSON cons -

1. JSON takes alot of space.
2. No schema or type information.
3. Not stuctured.

## Proto and Protocol Buffers

Is the schema definition of the data structure. It is a contract between the client and the server. It is language `agnostic`.

`Protoc` is the compiler that takes the proto file and generates code in the language of your choice.

### Requirements

`npm install -g protoc-gen-js`
`npm install google-protobuf`

Protocol buffer Pros -

1. Structured data
2. Schema and type information (strongly typed)
3. Consumes Less space (1/3rd of JSON)
4. Language agnostic
5. Code generation (protoc)
