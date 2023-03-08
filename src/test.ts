// tests/calculator.spec.tx
import { assert, expect } from 'chai';
import { addition } from './index';
import { x } from './api'

describe("Calculator Tests", () => {
      it("should return 5 when 2 is added to 3", () => {
      const result = addition(2, 3);
      assert.equal(result, 5);
   });
});

describe("API init", () => {
    it("init api", async (done) => {
        const result = await x();
        expect(result).to.equal('7'); 

        done();
     }); 
});
