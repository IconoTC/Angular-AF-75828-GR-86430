class Utils {

}

class Tools extends Utils {
  // code...

  make() {
    // code...
  }
}


class Logger {
  // code...

  tools = new Tools();
}


const logger = new Logger();
logger.tools.make();
