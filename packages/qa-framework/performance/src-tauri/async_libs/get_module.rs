use std::time::Instant;

use chrono::Utc;
use futures::{Future, future};
use reqwest::{Client, header::HeaderMap, Response, Error};
use serde::{Serialize, Deserialize};
use tokio::task::JoinHandle;

#[derive(Serialize, Deserialize, Debug)]
pub struct ReturnResponseProps{
    pub data: Vec<NativeResponseProps>
}

#[derive(Serialize, Deserialize, Debug)]
pub struct NativeResponseProps{
    pub status: u16,
    pub elapsed: u128,
    pub issued_time: String
}


pub async fn prepare_get_request(client: &Client, url: &String, headers: &HeaderMap) -> JoinHandle<impl Future<Output = Result<Response, Error>>>{
  let client = client.clone();
  let url = url.clone();
  let headers = headers.clone();
    let handle = tokio::spawn(async move {
      let handle = client.get(url).headers(headers).send();
      return handle;
    });
    return handle;
}

fn chunks(data: Vec<JoinHandle<impl Future<Output = Result<Response, Error>>>>, chunk_size: usize) -> Vec<Vec<JoinHandle<impl Future<Output = Result<Response, Error>>>>> {
  let mut results = vec![];
  let mut current = vec![];
  for i in data {
      if current.len() >= chunk_size {
          results.push(current);
          current = vec![];
      }
      current.push(i);
  }
  results.push(current);

  return results;
}

pub async fn config_and_process_get(handles: Vec<JoinHandle<impl Future<Output = Result<Response, Error>>>>, rps: i32) -> Vec<NativeResponseProps>{
  let mut native_responses_list:Vec<NativeResponseProps> = Vec::new();
  let chunks = chunks(handles, rps as usize);
  for chunk in chunks{
    let native_responses = future::join_all(chunk.into_iter().map(|handle|{
      let native_response = async move {
        let native_response = process_get_response(handle).await;
        return native_response;
      };
      return native_response;
    }));
    let mut native_responses_resolved = native_responses.await;
    native_responses_list.append(&mut native_responses_resolved)
  }
  return native_responses_list;
}

pub async fn process_get_response(handle: JoinHandle<impl Future<Output = Result<Response, Error>>>) -> NativeResponseProps{
  let now = Instant::now();
  let issued_time = Utc::now().to_string();
  let response = handle.await.unwrap().await;
  if response.is_err() {
    let native_response = NativeResponseProps{
      status: 0,
      elapsed: now.elapsed().as_millis(),
      issued_time
    };
    return native_response;
  }
  else{
    let native_response = NativeResponseProps{
      status: response.unwrap().status().as_u16(),
      elapsed: now.elapsed().as_millis(),
      issued_time
    };
    return native_response;
  }
}