import { PipelineStage, Types } from "mongoose";

export const getAllWorkshopsQuery = (
    search: string = "",
    favoriteWorkshopIds: Types.ObjectId[] = []
): PipelineStage[] => {
    const pipeline: PipelineStage[] = [];

    if (search) {
        const regex = { $regex: search, $options: 'i' };
        pipeline.push({
            $match: {
                $or: [
                    { title: regex },
                    { 'modules.title': regex },
                ]
            }
        });
    }

    pipeline.push({
        $addFields: {
            isFavorite: {
                $cond: [
                    { $in: ['$_id', favoriteWorkshopIds] },
                    1,
                    0
                ]
            }
        }
    });

    pipeline.push({
        $sort: {
            isFavorite: -1,
            createdAt: -1
        }
    });

    return pipeline;
};
