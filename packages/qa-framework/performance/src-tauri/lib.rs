mod async_libs;

use napi_derive::napi;
use async_libs::requests::{HeaderProps, prepare_headers, get_request, get_client};

#[napi]
pub async fn get_request_load(url: String, requests_count: i32, max_rps: i32) -> String {
    let client = get_client();
    let headers_data = vec![
        HeaderProps::add_header("content-type", "application/json"),
    ];
    let headers = prepare_headers(headers_data);
    let result = get_request(client, headers, url, requests_count, max_rps).await;
    let serialized = serde_json::to_string(&result).unwrap();
    return serialized;
}