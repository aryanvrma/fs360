"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Nav = _interopRequire(require("../components/Nav"));

var _enzyme = require("enzyme");

var mount = _enzyme.mount;
var shallow = _enzyme.shallow;
var store = _interopRequire(require("../stores/store"));




describe("Nav", function () {


  it("shows two elements", function () {
    var element = shallow(React.createElement(Nav, { store: store }));
    console.log(element.html());

    expect(element.find("user")).to.have.length(0);
    expect(element.find(".login")).to.have.length(1);

  });
});
//    expect(element).to.be.present()

//	expect(element.find('#user')[0].html()).to.contain.text('Michael')