import express from 'express';
import createError from 'http-errors';

import { ProjectType, Project } from '../database';

export const projects_post = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        /*if (!req.user) {
            return next(createError(401, 'Please log-in and try again.'));
        }*/
        var newProject: ProjectType = new Project({
            ...req.body
        });
        var createdProject: ProjectType = await newProject.save({ validateBeforeSave: true });
        res.status(200).json(createdProject);
    } catch (err) {
        next(createError(500, err));
    }
}

export const projects_name_get = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        var foundProject = await Project.findOne(req.params).exec();
        if (!foundProject) {
            return next(createError(404, 'Project not found.'));
        }
        res.status(200).json(foundProject);
    } catch (err) {
        next(createError(500, err));
    }
}