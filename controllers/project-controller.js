const { Project } = require('../models')

async function index(req, res, next) {
    try {
        const projects = await Project.find({
            owner: req.body.userId,
        }).sort({ createdAt: -1 })
        res.status(200).json({
            data: projects,
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function create(req, res, next) {
    try {
        const newProject = new Project(req.body);
        await newProject.save()
        res.status(201).json(({
            data: newProject,
            message: "Project created successfully",
        }));
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function detail(req, res, next) {
    try {
        const project = await Project.findById(req.body._id)
            .populate("owner")
            .populate("members.user")
        res.status(200).json({
            data: project,
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function getProjectByRole(req, res, next) {
    try {
        const userId = req.body.userId;
        const projects = await Project.find({ "members.user": userId })
            .sort({
                createdAt: -1,
            })
            .populate("owner");
        res.status(200).json({
            data: projects,
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function update(req, res, next) {
    try {
        await Project.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({
            message: "Project updated successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    };
}

async function destroy(req, res, next) {
    try {
        await Project.findByIdAndDelete(req.body._id);
        res.status(200).json({
            message: "Project deleted successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function deleteMember(req, res) {
    try {
        const { memberId, projectId } = req.body;
        const project = await Project.findById(projectId);
        project.members.pull(memberId);
        await project.save();
        res.status(200).json({
            message: "Member removed successfully",
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

module.exports = {
    index ,
    create,
    detail,
    getProjectByRole,
    update,
    destroy,
    deleteMember
}














