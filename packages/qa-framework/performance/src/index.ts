import ffi from 'ffi-napi';
import path from 'path';

import os from 'os';

// Printing os.type() value
let libPath = '',
  libForOS = '';
var type = os.type();
switch (type) {
  case 'Darwin':
    libForOS = './target/release/libperformance_rust.dylib';
    libPath = path.resolve(path.join(__dirname.split('/dist')[0], libForOS));
    break;
  case 'Linux':
    libForOS = './target/release/libperformance_rust.so';
    libPath = path.resolve(path.join(__dirname.split('/dist')[0], libForOS));
    break;
  case 'Windows_NT':
    libForOS = './target/release/performance_rust.dll';
    libPath = path.resolve(path.join(__dirname.split('\\dist')[0], libForOS));
    break;
  default:
    libPath = path.resolve(
      path.join(__dirname.split('\\performance\\dist')[0], libForOS)
    );
}

const libWeb = ffi.Library(libPath, {
  add: ['int32', ['int32', 'int32']],
});

export const { add } = libWeb;
