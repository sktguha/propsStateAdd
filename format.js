/**
 * search for = this.target or =this.target or = target or =target upwards
 * if we reach blank line means we reached top
 *   so o/p const { val } = this.target 1 after the blank line index
 * else if( reached any target){
 *     if( { char in same line means same line}){
 *         then add ,<space>high at end part
 *     } else( { char in different line) {
 *
 *     }
 * }
 *   
 */

const robot = require("robotjs");
const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
    setTimeout(()=> {
        // robot.mouseClick('left', true)
        // robot.keyTap('left', ['alt'])
        // robot.keyTap('right', ['shift','alt'])
        //ctrl x to copy full path
    }, 1000);
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject, req.url);
}

const server = http.createServer(requestListener);
server.listen(9090);