const { Task } = require('../models')

async function index(req, res, next) {
    try {
        Object.keys(req.body).forEach((key) => {
            if (req.body[key] === "all") {
                delete req.body[key];
            }
        });
        delete req.body["userId"];
        const tasks = await Task.find(req.body)
            .populate("assignedTo")
            .populate("assignedBy")
            .populate("project")
            .sort({ createdAt: -1 });
        res.status(201).json({
            message: "Tasks fetched successfully",
            data: tasks,
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};


async function create(req, res, next) {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json({
            message: "Task created successfully",
            data: newTask,
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

