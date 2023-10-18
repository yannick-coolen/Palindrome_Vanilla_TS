import { it, expect, describe } from 'vitest';
import { palindrome } from '../src/palindrome';

describe('Test Suite: Palindrome', () => {
  it('should check if text tenet is a palindrome', () => {
    expect(palindrome('Tenet')).toBe('tenet is a palindrome.');
  });

  it('should check if text Horse is not a palindrome', () => {
    expect(palindrome('Horse')).toBe('horse is not a palindrome.');
  });

  it('should check if an empty string return an invalid result', () => {
    expect(palindrome('')).toBe('value invalid.');
  });

  it('should check if null value will fail the test ', () => {
    expect(palindrome(null as any)).toBe('value invalid.');
  });

  it('should check if null value will fail the test ', () => {
    expect(palindrome(undefined as any)).toBe('value invalid.');
  });

  it('should check if number value will return an invalid result', () => {
    expect(palindrome(55 as any)).toBe('value invalid.');
  });

  it('should check if a string palindrome returns a passed result', () => {
    expect(palindrome('55')).toBe('55 is a palindrome.');
  });
});
