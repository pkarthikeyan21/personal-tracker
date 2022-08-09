// const userController = require('./controller/UserController');
// const chatController = require('./controller/ChatController');
// module.exports = {
//   start: function(io) {
//       io.on('connection', function(socket) {
//         socket.on('chat', function(body) {
//         chatController.getIncomingMessage({body}).then(function(result) {
//             io.emit('chatResponse', result);
//         });
//       });
//           socket.on('message', function(message) {
//               logger.log('info',message.value);
//               socket.emit('ditConsumer',message.value);
//               console.log('from console',message.value);
//           });
//       });
//     }}