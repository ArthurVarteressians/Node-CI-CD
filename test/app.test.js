const { createApp } = require('../app');

describe('Express App', () => {
  test('GET / returns hello message', () => {
    const app = createApp();
    
    const mockReq = {
      method: 'GET',
      url: '/',
      headers: {}
    };
    
    const mockRes = {
      _status: 0,
      _body: '',
      status: function(code) {
        this._status = code;
        return this;
      },
      send: function(text) {
        this._body = text;
        return this;
      },
      setHeader: function() {}
    };

    app(mockReq, mockRes);
    expect(mockRes._status).toBe(200);
    expect(mockRes._body).toBe('Hello CI/CD Pipeline!');
  });
});