import ffi from 'ffi-napi';
import path from 'path';

const libPath = path.resolve(
  path.join(
    __dirname.split('/dist')[0],
    './performance-rust/target/release/libperformance_rust.dylib'
  )
);

const libWeb = ffi.Library(libPath, {
  add: ['int32', ['int32', 'int32']],
});

export const { add } = libWeb;
