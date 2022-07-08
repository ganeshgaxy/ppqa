mod async_libs;
use async_libs::requests::{get_client,HeaderProps,prepare_headers,get_request};


//use tokio::runtime::Runtime;

#[derive(Debug)]
pub struct ReturnResponseProps{
    pub data: Vec<NativeResponseProps>
}

#[derive(Debug)]
pub struct NativeResponseProps{
    pub status: u16,
    pub elapsed: u128,
}

#[tokio::main]
async fn main(){
    let url = String::from("https://cat-fact.herokuapp.com/facts/");
    let client = get_client();
    let headers_data = vec![
        HeaderProps::add_header("content-type", "application/json"),
    ];
    let headers = prepare_headers(headers_data);
    let result = get_request(client, headers, url, 10, 1).await;
    println!("{:?}", result);
}