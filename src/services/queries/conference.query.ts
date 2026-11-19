import { PipelineStage, Types } from "mongoose";

export const getAllConferencesQuery = (
    search: string = "",
    favoriteConferenceIds: Types.ObjectId[] = []
): PipelineStage[] => {
    const regex = { $regex: search, $options: 'i' };
    const pipeline: PipelineStage[] = [
        {
            $match: {
                $or: [
                    { title: regex },
                    { description: regex },
                ]
            }
        },
        {
            $addFields: {
                isFavorite: {
                    $cond: [
                        { $in: ['$_id', favoriteConferenceIds] },
                        1,
                        0
                    ]
                }
            }
        },
        {
            $sort: {
                isFavorite: -1,
                createdAt: -1
            }
        }
    ];

    return pipeline;
};
