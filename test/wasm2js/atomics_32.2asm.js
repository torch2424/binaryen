

  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_atomic_wait_i32(ptr, expected, timeoutLow, timeoutHigh) {
    if (timeoutLow != -1 || timeoutHigh != -1) throw 'unsupported timeout';
    var result = Atomic.wait(HEAP32, ptr, expected);
    if (result == 'ok') return 0;
    if (result == 'not-equal') return 1;
    if (result == 'timed-out') return 2;
    throw 'bad result ' + result;
  }
      
  var passiveSegments = [];

  function wasm2js_memory_init(segment, dest, offset, size) {
    // TODO: traps on invalid things
    bufferView.set(passiveSegments[segment].subarray(offset, offset + size), dest);
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 function $0() {
  Atomics.compareExchange(HEAP8, 1024, 1, 2) | 0;
  Atomics.compareExchange(HEAP16, 1024 >> 1, 1, 2) | 0;
  Atomics.compareExchange(HEAP32, 1024 >> 2, 1, 2) | 0;
  Atomics.load(HEAPU8, 1028 >> 0) | 0;
  Atomics.load(HEAPU16, 1028 >> 1) | 0;
  Atomics.load(HEAP32, 1028 >> 2) | 0;
  Atomics.store(HEAP32, 100 >> 2, 200);
  wasm2js_atomic_wait_i32(4 | 0, 8 | 0, -1 | 0, -1 | 0) | 0;
  wasm2js_memory_init(0, 512, 0, 4);
  wasm2js_memory_init(1, 1024, 4, 2);
 }
 
 var FUNCTION_TABLE = [];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  "test": $0
 };
}

var memasmFunc = new ArrayBuffer(16777216);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array; 
  }var bufferView = new Uint8Array(memasmFunc);
passiveSegments.push(base64DecodeToExistingUint8Array(new Uint8Array(6), 0, "aGVsbG8s"));
passiveSegments.push(base64DecodeToExistingUint8Array(new Uint8Array(6), 0, "d29ybGQh"));
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var test = retasmFunc.test;