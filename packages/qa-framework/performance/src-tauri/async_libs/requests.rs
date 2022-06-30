use std::{str::FromStr, time::Instant};

use reqwest::{Client, header::{HeaderMap, HeaderValue, HeaderName}, Response};

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

pub async fn get_request(client: Client, headers: HeaderMap, url: &str)->Result<Response, reqwest::Error>{
  let now = Instant::now();
  let resp = client.get(url).headers(headers).send().await;
  print!("Elapsed: {:?} Milliseconds", now.elapsed().as_millis());
  return resp;
}
