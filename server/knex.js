const knex = require("knex")

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "sernqoutes.sqlite"
    }
})

module.exports = connectedKnex