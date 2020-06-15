/**
 * search for = this.target or =this.target or = target or =target upwards
 * if we react blank line means we reached top
 *   so o/p const { val } = this.target 1 after the blank line index
 * else 
 *   
 */

const robot = require("robotjs");
const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
    setTimeout(()=> {
        // robot.mouseClick('left', true)
        robot.keyTap('left', ['alt'])
        robot.keyTap('right', ['shift','alt'])
        //ctrl x to copy full path
    }, 1000);
    console.log('got request');
}

const server = http.createServer(requestListener);
server.listen(9090);