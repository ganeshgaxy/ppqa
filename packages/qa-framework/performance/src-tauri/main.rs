mod async_libs;

use async_libs::requests::{self, HeaderProps, prepare_headers, get_request};

#[tokio::main]
async fn main(){
    let headers_data = vec![
        HeaderProps::add_header("content-type", "application/json"),
    ];
    let headers = prepare_headers(headers_data);
    let client = requests::get_client();
    let result = get_request(client, headers, "https://cat-fact.herokuapp.com/facts/").await;
    println!("{:?}",result.unwrap().status());
}