const knex = require("./knex")

function newQoute(description) {
    return knex("qoutes").insert(description)
}

function getQoute(id) {
    return knex("qoutes").select("*")
    .where("id",id)
}

function getQoutes() {
    return knex("qoutes").select("*")
}

function deleteQoute(id) {
    return knex("qoutes")
    .where("id",id).del()
}

function updateQoute(id,todo) {
    return knex("qoutes")
    .where("id",id).update(todo)
}

module.exports = {
    newQoute,
    getQoute,
    getQoutes,
    deleteQoute,
    updateQoute
}