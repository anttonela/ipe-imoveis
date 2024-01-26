const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@backend': path.resolve(__dirname, '../backend/app/View/Upload/'),
        },
    },
};
