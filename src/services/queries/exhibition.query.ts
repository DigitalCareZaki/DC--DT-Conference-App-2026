import { PipelineStage, Types } from "mongoose";

export const getAllExhibitionsQuery = (
    search: string = "",
    favoriteExhibitionIds: Types.ObjectId[] = []
): PipelineStage[] => {
    const pipeline: PipelineStage[] = [];

    if (search) {
        const regex = { $regex: search, $options: 'i' };
        pipeline.push({
            $match: {
                $or: [
                    { title: regex },
                    { address: regex },
                ]
            }
        });
    }

    pipeline.push({
        $addFields: {
            isFavorite: {
                $cond: [
                    { $in: ['$_id', favoriteExhibitionIds] },
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
