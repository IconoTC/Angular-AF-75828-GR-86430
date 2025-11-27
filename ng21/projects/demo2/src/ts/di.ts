
// interface Tools1 
class Tools1 {
  // code...

  make() {
    // code...
  }
}

class Tools3 {
  // code...

  make() {
    // code...
  }
}


class Logger1 {
  // code...

  tools: Tools1;

  constructor(tools: Tools1) {
    this.tools = tools;
  }
}

const logger1 = new Logger1(new Tools1());
logger1.tools.make();

const logger2 = new Logger1({
  make() {
    // code...
  }
});
logger2.tools.make();

const logger3 = new Logger1(new Tools3());
logger3.tools.make();
