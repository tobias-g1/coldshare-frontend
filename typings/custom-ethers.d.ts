declare module 'ethers/types/abi/coders/abstract-coder' {
  interface AbstractCoderWithIndexSignature {
    [K: string]: any;
    [K: number]: any;
  }
}
