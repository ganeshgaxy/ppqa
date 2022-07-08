use std::{str::FromStr};

use reqwest::{Client, header::{HeaderMap, HeaderValue, HeaderName}};

use super::get_module::{prepare_get_request, ReturnResponseProps, config_and_process_get};

pub struct HeaderProps{
  pub key:HeaderName, pub value:HeaderValue
}

impl HeaderProps{
  pub fn add_header(key: &str, value: &str) -> HeaderProps{
    let header_key: reqwest::header::HeaderName = HeaderName::from_str(key).unwrap();
    let header_value = value.parse().unwrap();
    HeaderProps{
      key: header_key, value: header_value,
    }
  }
}

pub fn prepare_headers(headers:Vec<HeaderProps>) -> HeaderMap{
  let mut headers_obj = HeaderMap::new();
  for header in headers{
    headers_obj.insert(header.key, header.value);
  }
  return headers_obj;
}

pub fn get_client()->Client{
  let client = reqwest::Client::new();
  return client;
}

pub async fn get_request(client: Client, headers: HeaderMap, url: String, requests_count: i32, max_rps: i32) -> ReturnResponseProps{
  let url = url;
  let mut handles= Vec::new();
  for _i in 0..requests_count{
    let handle = prepare_get_request(&client, &url, &headers).await;
    handles.push(handle);
  }
  let native_responses = config_and_process_get(handles, max_rps).await;
  let return_response = ReturnResponseProps{data: native_responses};
  return return_response;
}
