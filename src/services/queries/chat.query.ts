import { PipelineStage, Types } from "mongoose";

export const getUserChatsQuery = (userId: Types.ObjectId): PipelineStage[] => {
    return [
        {
            $match: {
                participants: { $in: [userId] }
            }
        },
        {
            $addFields: {
                otherParticipantId: {
                    $arrayElemAt: [
                        {
                            $setDifference: ['$participants', [userId]]
                        },
                        0
                    ]
                }
            }
        },
        {
            $lookup: {
                from: 'messages',
                let: {
                    chatId: '$_id',
                    userId: userId
                },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$chatId', '$$chatId'] },
                                    { $eq: ['$receiver', '$$userId'] },
                                    { $eq: ['$isRead', false] }
                                ]
                            }
                        }
                    },
                    {
                        $count: 'count'
                    }
                ],
                as: 'unreadMeta'
            }
        },
        {
            $addFields: {
                unreadCount: {
                    $ifNull: [
                        {
                            $arrayElemAt: ['$unreadMeta.count', 0]
                        },
                        0
                    ]
                }
            }
        },
        {
            $lookup: {
                from: 'users',
                let: { otherId: '$otherParticipantId' },
                pipeline: [
                    { $match: { $expr: { $eq: ['$_id', '$$otherId'] } } },
                    { $project: { name: 1, _id: 0, role: 1 } }
                ],
                as: 'otherUser'
            }
        },
        {
            $addFields: {
                name: { $arrayElemAt: ['$otherUser.name', 0] },
                role: { $arrayElemAt: ['$otherUser.role', 0] }
            }
        },
        {
            $sort: { updatedAt: -1 }
        },
        {
            $project: { unreadMeta: 0, otherParticipantId: 0, otherUser: 0 }
        }
    ];
}
