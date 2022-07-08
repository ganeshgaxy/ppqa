import path from 'path';
import os from 'os';

let nativePath = './native';


var type = os.type();
switch (type) {
  case 'Darwin':
    nativePath = path.resolve(path.join(__dirname.split('/dist')[0], './index.node'));
    break;
  case 'Linux':
    nativePath = path.resolve(path.join(__dirname.split('/dist')[0], './index.node'));
    break;
  case 'Windows_NT':
    nativePath = path.resolve(path.join(__dirname.split('\\dist')[0], './index.node'));
    break;
  default:
    nativePath = path.resolve(path.join(__dirname.split('/dist')[0], './index.node'));
}

let nativeAddon = require(nativePath)
export const getRequestLoad = async(url: string, request:number = 1, max_rps: number = 1) =>{
  const value = await nativeAddon.getRequestLoad(url, request, max_rps);
  return JSON.parse(value)
}
