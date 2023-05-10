const { Task } = require('../models')
const { handleValidateOwnership } = require('../middleware/auth')

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

async function update(req, res) {
    try {
        await Task.findByIdAndUpdate(req.body._id, req.body);
        res.status(201).json({
            message: "Task updated successfully",
        });
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
};

async function destroy(req, res) {
    try {
        await Task.findByIdAndDelete(req.body._id);
        res.status(201).json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
};

module.exports = {
    index,
    create,
    update,
    destroy
}



