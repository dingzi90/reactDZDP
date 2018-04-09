const fs = require('fs');
const http = require('http');
let querystring = require('querystring');
let defaultObj = { success: false, msg: "不存在" };
let readFile = (fileName, callback) => {
    setTimeout(() => {
        fs.readFile(`../${fileName}/index.json`, 'utf8', (err, data) => {
            if (!err) {
                console.log('成功', fileName);
                callback(data.toString());
            } else {
                console.log('失败', err.path);
                callback(JSON.stringify(defaultObj));
            }
        })
    }, 1000 * 1)
};


const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "x-requested-with,Authorization");
    res.setHeader("Access-Control-Allow-Credentials","true");

    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    if (req.url == '/favicon.ico') {
        res.end('favicon.ico');
    } else {
        if (req.url.indexOf('=') == -1 && req.url.indexOf('&') == -1) {
            var fileName = req.url.replace('?', '/');
        } else {
            var fileName = req.url.match(/^.*?[\=\&]/)[0].replace(/[\=\&]/g, '').replace('?', '/');
        }
        readFile(fileName, (data) => {
            res.write(data)
            res.end();
        });

    }
});
app.listen(3123);
console.log("server run at port 3123");