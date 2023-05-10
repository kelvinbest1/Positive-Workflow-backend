async function index(req, res, next) {
    try {
        const projects = await Project.find({
            owner: req.body.userId,
        }).sort({ createdAt: -1 })
        res.status(200).json({
            data: projects,
        });
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};

async function create(req, res, next) {
    try {
        const newProject = new Project(req.body);
        await newProject.save()
        res.status(201).json(({
            data: newProject,
            message: "Project created successfully",
        }));
    } catch (err) {
       res.status(400).json({error: err.message})
    }
};

async function detail(req, res, next) {
    try {
        const project = await Project.findById(req.body._id)
            .populate("owner")
            .populate("members.user")
        res.status(200).json({
            data: project,
        });
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};



