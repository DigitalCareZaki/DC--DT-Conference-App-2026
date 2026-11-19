import {
    IUser, UserSchema,
    IExhibition, ExhibitionSchema,
    ISpeaker, SpeakerSchema,
    IConference, ConferenceSchema,
    IWorkshop, WorkshopSchema,
    IGallery, GallerySchema,
    IChat, ChatSchema,
    IMessage, MessageSchema,
    IFeedback, FeedbackSchema,
    INotification, NotificationSchema,
    IQuestion, QuestionSchema
} from "../schema";
import BaseModel from './common/BaseModel';

export const UserRepository = new BaseModel<IUser>('User', UserSchema);
export const ExhibitionRepository = new BaseModel<IExhibition>('Exhibition', ExhibitionSchema);
export const SpeakerRepository = new BaseModel<ISpeaker>('Speaker', SpeakerSchema);
export const ConferenceRepository = new BaseModel<IConference>('Conference', ConferenceSchema);
export const WorkshopRepository = new BaseModel<IWorkshop>('Workshop', WorkshopSchema);
export const GalleryRepository = new BaseModel<IGallery>('Gallery', GallerySchema);
export const ChatRepository = new BaseModel<IChat>('Chat', ChatSchema);
export const MessageRepository = new BaseModel<IMessage>('Message', MessageSchema);
export const FeedbackRepository = new BaseModel<IFeedback>('Feedback', FeedbackSchema);
export const NotificationRepository = new BaseModel<INotification>('Notification', NotificationSchema);
export const QuestionRepository = new BaseModel<IQuestion>('Question', QuestionSchema);