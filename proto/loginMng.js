var init = function(loginTxt){
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');

    const packageDefinition = protoLoader.loadSync(
        './client.proto', { 
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
    });

    const loginProto = grpc.loadPackageDefinition(packageDefinition).noxLogin;

    function main() {
        // Establish connection with the server
        const client = new loginProto.Login('localhost:3456', grpc.credentials.createInsecure());

        client.AskForLogin({login: loginTxt} , function(err, response) {
            console.log('Data:', response); // API response
            console.log(err);
        });
    }
    main();
}
exports.init = init;