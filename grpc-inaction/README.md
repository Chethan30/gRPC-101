## Running the application

Open two terminals, navigate to `gRPC-101/grpc-inaction/` and run the following commands in each terminal:

- `node server.js` to start the server
- `node client.js` to start the client

The following is the call recorded at the server when client calls the todo service:

```
ServerUnaryCallImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  call: Http2ServerCallStream {
    _events: [Object: null prototype] {
      callEnd: [Array],
      streamEnd: [Function],
      sendMessage: [Function (anonymous)],
      receiveMessage: [Function (anonymous)],
      cancelled: [Function]
    },
    _eventsCount: 5,
    _maxListeners: undefined,
    stream: Http2Stream {
      id: 1,
      closed: false,
      destroyed: false,
      state: {
        state: 2,
        weight: 16,
        sumDependencyWeight: 0,
        localClose: 0,
        remoteClose: 0,
        localWindowSize: 65509
      },
      readableState: ReadableState {
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        awaitDrainWriters: null,
        [Symbol(kState)]: 60033046
      },
      writableState: WritableState {
        highWaterMark: 16384,
        length: 0,
        corked: 0,
        onwrite: [Function: bound onwrite],
        writelen: 0,
        bufferedIndex: 0,
        pendingcb: 0,
        [Symbol(kState)]: 34340908,
        [Symbol(kBufferedValue)]: null
      }
    },
    handler: {
      func: [Function: bound createTodo],
      serialize: [Function: serialize],
      deserialize: [Function: deserialize],
      type: 'unary',
      path: '/todoPackage.Todo/createTodo'
    },
    cancelled: false,
    deadlineTimer: null,
    statusSent: false,
    deadline: Infinity,
    wantTrailers: false,
    metadataSent: false,
    canPush: false,
    isPushPending: false,
    bufferedMessages: [],
    messagesToPush: [],
    maxSendMessageSize: -1,
    maxReceiveMessageSize: 4194304,
    [Symbol(kCapture)]: false
  },
  metadata: Metadata {
    internalRepr: Map(1) { 'user-agent' => [Array] },
    options: {}
  },
  request: { id: -1, text: 'Buy milk' },
  cancelled: false,
  [Symbol(kCapture)]: false
}
```
