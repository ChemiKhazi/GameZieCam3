'use strict';

describe('Service: pixelCam', function () {

  // load the service's module
  beforeEach(module('gzcam3App'));

  // instantiate service
  var pixelCam;
  beforeEach(inject(function (_pixelCam_) {
    pixelCam = _pixelCam_;
  }));

  it('should do something', function () {
    expect(!!pixelCam).toBe(true);
  });

});
