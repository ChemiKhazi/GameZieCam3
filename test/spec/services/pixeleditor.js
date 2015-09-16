'use strict';

describe('Service: pixelEditor', function () {

  // load the service's module
  beforeEach(module('gzcam3App'));

  // instantiate service
  var pixelEditor;
  beforeEach(inject(function (_pixelEditor_) {
    pixelEditor = _pixelEditor_;
  }));

  it('should do something', function () {
    expect(!!pixelEditor).toBe(true);
  });

});
