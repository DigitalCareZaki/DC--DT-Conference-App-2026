import { PipelineStage, Types } from "mongoose";
import { FAVORITE_TYPE, ROLE } from "../../utils/constants";

export const getAllUsersQuery = (search: string, currentUserId: string) => {
    const regex = search ? { $regex: search, $options: 'i' } : null;
    const formattedUserId = Types.ObjectId.isValid(currentUserId)
        ? new Types.ObjectId(currentUserId)
        : currentUserId;

    const baseConditions: Record<string, any>[] = [
        { _id: { $ne: formattedUserId } },
        { role: { $ne: ROLE.ADMIN } },
        { isDeleted: false },
    ];

    if (regex) {
        baseConditions.push({
            $or: [
                { name: regex },
                { email: regex },
                { role: regex }
            ]
        });
    }

    return { $and: baseConditions };
};

export const getUserFavoritesAggregation = (
    userObjectId: Types.ObjectId,
    favoriteType?: FAVORITE_TYPE
): PipelineStage[] => {
    const pipeline: PipelineStage[] = [
        { $match: { _id: userObjectId, isDeleted: false } },
        { $project: { favorites: 1 } },
        { $unwind: { path: '$favorites', preserveNullAndEmptyArrays: false } },
    ];

    if (favoriteType) {
        pipeline.push({ $match: { 'favorites.type': favoriteType } });
    }

    pipeline.push(
        {
            $lookup: {
                from: 'conferences',
                let: { favId: '$favorites.favoriteId', favType: '$favorites.type' },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$_id', '$$favId'] },
                                    { $eq: ['$$favType', FAVORITE_TYPE.CONFERENCE] }
                                ]
                            }
                        }
                    }
                ],
                as: 'conference'
            }
        },
        {
            $lookup: {
                from: 'workshops',
                let: { favId: '$favorites.favoriteId', favType: '$favorites.type' },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$_id', '$$favId'] },
                                    { $eq: ['$$favType', FAVORITE_TYPE.WORKSHOP] }
                                ]
                            }
                        }
                    }
                ],
                as: 'workshop'
            }
        },
        {
            $lookup: {
                from: 'exhibitions',
                let: { favId: '$favorites.favoriteId', favType: '$favorites.type' },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$_id', '$$favId'] },
                                    { $eq: ['$$favType', FAVORITE_TYPE.EXHIBITION] }
                                ]
                            }
                        }
                    }
                ],
                as: 'exhibition'
            }
        }
    );

    pipeline.push(
        {
            $addFields: {
                favoriteDoc: {
                    $first: {
                        $concatArrays: ['$conference', '$workshop', '$exhibition']
                    }
                }
            }
        },
        {
            $addFields: {
                favoriteCreatedAt: { $ifNull: ['$favoriteDoc.createdAt', null] }
            }
        },
        {
            $project: {
                _id: '$favorites.favoriteId',
                type: '$favorites.type',
                favoriteId: {
                    $cond: [
                        { $ne: ['$favoriteDoc', null] },
                        {
                            $let: {
                                vars: { doc: '$favoriteDoc' },
                                in: {
                                    $mergeObjects: [
                                        '$$doc',
                                        { id: { $toString: '$$doc._id' } }
                                    ]
                                }
                            }
                        },
                        '$favorites.favoriteId'
                    ]
                },
                favoriteCreatedAt: 1
            }
        },
        { $sort: { favoriteCreatedAt: -1, _id: -1 } },
        { $project: { favoriteCreatedAt: 0 } }
    );

    return pipeline;
};
