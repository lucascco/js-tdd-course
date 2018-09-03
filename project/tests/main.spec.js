import { expect } from 'chai';
import {sum, divide, mult, sub} from '../src/main.js';

describe.skip('Calc', () => {
  describe('Smoke tests', () => {
    
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method divide', () => {
      expect(divide).to.exist;
      expect(divide).to.be.a('function');
    });

  });
  
  describe('Sum', () => {
    it('Should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  
  describe('Sub', () => {
    
    it('Should return 4 when `sub(6,2)`', () => {
      expect(sub(6,2)).to.be.equal(4);
    });

    it('Should return -4 when `sub(6, 10)`', () => {
      expect(sub(6,10)).to.be.equal(-4);
    });
  });

    
  describe('Mult', () => {
    it('Should return 4 when `mult(2,2)`', () => {
      expect(mult(2,2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    
    it('Should return 2 when `divide(4,2)`', () => {
      expect(divide(4,2)).to.be.equal(2);
    });

    it('Should return `Não pode ter divisão por zero` when dived by zero', () => {
      expect(divide(4,0)).to.be.equal('Não pode ter divisão por zero')
    });

  });
});