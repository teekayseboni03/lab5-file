module.exports = async function (context, req) {
    const cars = require('./cars.json')
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: cars

    };
}