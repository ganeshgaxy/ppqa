import { Expect } from "@playwright/test";

export interface PlaywrightExpectProps{
    expect: Expect;
}

export class PlaywrightExpect implements PlaywrightExpectProps{
    public expect: Expect;
    constructor(expect: Expect){
        this.expect=expect;
    }
}

export const usePlaywrightExpect = (expect: Expect) : PlaywrightExpectProps => {
    const returnObject : PlaywrightExpectProps = new PlaywrightExpect(expect);
    
    const handler = {}
    return new Proxy(returnObject, handler) as PlaywrightExpectProps;
}