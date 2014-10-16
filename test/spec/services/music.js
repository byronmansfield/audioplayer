'use strict';

describe('Service: Music', function () {

  // load the service's module
  beforeEach(module('audioplayerApp'));

  // instantiate service
  var Music;
  beforeEach(inject(function (_Music_) {
    Music = _Music_;
  }));

  // it('should do something', function () {
  //   expect(!!Music).toBe(true);
  // });

});
