const { Task } = require('../models')


async function create(req, res,next){
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(200).json({
          message: "Task created successfully",
          data: newTask,
        });
      } catch (err) {
        res.status(400).json({ error: err.message })
      }
    };
       