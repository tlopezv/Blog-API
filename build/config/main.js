"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    // port
    port: process.env.PORT || 3000,
    // database
    db: 'mongodb://localhost:27017/blog-demo-tutorial',
    // test enviroment
    test_env: 'test',
    test_db: 'mongodb://localhost/blog-demo-test',
    test_port: 3001
};
exports.default = config;
//# sourceMappingURL=main.js.map