const models = require('../../models')
const todo = models.todo_list;

const controller = {
    get: (req, res, next) => {
        todo
            .findAll().then(todo_lists => {
                res.send({
                    todo_lists
                });
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    getOneById: (req, res, next) => {
        const id = Number(req.params.id)
        models.todo_list
            .findById(id)
            .then(todo => {
                if (todo) {
                    res.send({
                        todo
                    })
                } else {
                    res.send({
                        message: `todo is not found`
                    })
                }
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    insert: (req, res, next) => {
        todo.build({
                priority: req.body.priority,
                todo_task: req.body.todo_task,
                completed: req.body.completed,
                due_date: req.body.due_date
            })
            .save()
            .then(todo =>
                res.send({
                    todo
                })
            )
    },

    deleteTaskById: (req, res, next) => {
        const id = Number(req.params.id)
        models.todo_list
            .destroy({
                where: {
                    id: id
                }
            })
            .then(todo =>
                res.send({
                    message: `task with id: ${id} has been deleted`
                })

            ).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },
    update: (req, res, next) => {
        const id = Number(req.params.id)
        todo
            .update({
                priority: req.body.priority,
                todo_task: req.body.todo_task,
                completed: req.body.completed,
                due_date: req.body.due_date
            }, {
                where: {
                    id: id
                }
            })
            .then(todo => {
                res.send({
                    message: `task with id: ${id} has been updated`
                })
            })
            .catch(err => {
                res.status(400).send({
                    Error: err.stack
                })
            })

    },
    searchByKeyword: (req, res, next) => {
        const keyword = req.query.q;
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        todo
            .findAll({
                where: {
                    todo_task: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            })
            .then(result => {
                console.log(result)
                if (result) {
                    res.status(200).send({
                        result
                    });
                } else {
                    res.status(404).send({
                        message: "Data not found!"
                    })
                }
            });
    }
}

module.exports = controller