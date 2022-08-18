use tonic::transport::Server;
use tonic::{Request, Response, Status};

use nox_api::nox_grpc_server;
use nox_grpc_server::login_server::{LoginServer, Login};
use nox_grpc_server::{LoginRequest, LoginResponse};


#[derive(Default)]
pub struct NoxLoginServer {}

#[tonic::async_trait]
impl Login for NoxLoginServer {
    async fn authentificate_user(&self, _ : Request<LoginRequest>) -> Result<Response<LoginResponse>, Status> {
        let response = LoginResponse { response: "OK".to_string() };
        Ok(Response::new(response))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("+*. noX Login Server .*+");

    let addr = "127.0.0.1:3456".parse()?;

    let login_server = NoxLoginServer::default();
    Server::builder()
        .add_service(LoginServer::new(login_server))
        .serve(addr)
        .await?;

    Ok(())
}