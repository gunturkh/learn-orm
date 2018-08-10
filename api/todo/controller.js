const models = require('../../models')
const todo = models.todo_list

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
        todo.build(
            {
                priority_id: req.body.priority_id,
                todo_task: req.body.todo_task,
                created_date: req.body.created_date,
                due_date: req.body.due_date
            }
        )
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
            .update(
                {
                    priority_id: req.body.priority_id,
                    todo_task: req.body.todo_task,
                    created_date: req.body.created_date,
                    due_date: req.body.due_date
                },
                {
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

    }
}

module.exports = controller