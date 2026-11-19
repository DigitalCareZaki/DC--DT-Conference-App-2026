import { Request, Response, NextFunction, Router } from "express";
import RootAPI from "./root.route";
import AuthAPI from "./auth.route";
import UserAPI from "./user.route";
import ExhibitionAPI from "./exhibition.route";
import SpeakerAPI from "./speaker.route";
import ConferenceAPI from "./conference.route";
import WorkshopAPI from "./workshop.route";
import GalleryAPI from "./gallery.route";
import ChatAPI from "./chat.route";
import FeedbackAPI from "./feedback.route";
import NotificationAPI from "./notification.route";
import QuestionAPI from "./question.route";
import { logger } from "../utils/helpers";

export default class API {
    router: Router;
    routeGroups: any[];

    constructor() {
        this.router = Router();
        this.routeGroups = [];
        this.loadRouteGroups();
        this.registerGroups();
    }

    loadRouteGroups() {
        const routeGroups = this.routeGroups;

        routeGroups.push(new RootAPI());
        routeGroups.push(new AuthAPI());
        routeGroups.push(new UserAPI());
        routeGroups.push(new ExhibitionAPI());
        routeGroups.push(new SpeakerAPI());
        routeGroups.push(new ConferenceAPI());
        routeGroups.push(new WorkshopAPI());
        routeGroups.push(new GalleryAPI());
        routeGroups.push(new ChatAPI());
        routeGroups.push(new FeedbackAPI());
        routeGroups.push(new NotificationAPI());
        routeGroups.push(new QuestionAPI());
    }

    setContentType(req: Request, res: Response, next: NextFunction) {
        res.set("Content-Type", "application/json");
        next();
    }

    registerGroups() {
        this.routeGroups.forEach((rg) => {
            logger.info(rg.getRouterGroup(), 'API');
            this.router.use("/api" + rg.getRouterGroup(), this.setContentType, rg.getRouter());
        });
    }
}