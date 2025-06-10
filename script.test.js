/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');


describe('Timer Script', () => {
  let html;

  beforeEach(() => {
    // Load html into string and inject into a document to mimick a real browser DOM 
    html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Import script after setting DOM
    require('./script.js');
  });


  test('Initial timer display shows default time', () => {
    // Simulate window.onload to run your init code
    window.onload();

    expect(document.getElementById('minutes').textContent).toBe('10');
    expect(document.getElementById('seconds').textContent).toBe('00');
  })
});