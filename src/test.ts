// tests/calculator.spec.tx
import { assert, expect } from 'chai';
import { addition } from './index';
import { GetHeaderHash } from './api'

describe("Calculator Tests", () => {
      it("should return 5 when 2 is added to 3", () => {
      const result = addition(2, 3);
      assert.equal(result, 5);
   });
});

describe('Block header', () => {
   it('Get Block Header', async () => {
      await GetHeaderHash(1);
   });
});
