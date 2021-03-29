const { Controller } = require('egg');


class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hola mundo desde egg';
    }
}

module.exports = HomeController;