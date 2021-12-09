import { assert } from "chai";
import {
  chainTabs,
  Interaction,
  Interactive,
} from "../dist/parsegraph-interact";

class Interactor implements Interactive {
  _interact: Interaction;

  constructor() {
    this._interact = new Interaction();
  }

  interact() {
    return this._interact;
  }
}

describe("Package", function () {
  it("works", () => {
    assert.isOk(new Interaction());
  });

  it("works", () => {
    const a = new Interactor();
    const b = new Interactor();
    const c = new Interactor();
    chainTabs(a, b, c);
    assert.equal(a.interact().nextInteractive(), b);
    assert.equal(b.interact().nextInteractive(), c);
    assert.equal(c.interact().nextInteractive(), a);
  });
});
