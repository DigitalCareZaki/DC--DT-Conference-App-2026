import { PipelineStage, Types } from "mongoose";
import { EXHIBITION_CATEGORY } from "../../utils/constants";

export const getAllExhibitionsQuery = (
    search: string = "",
    userId: string | null = null,
): PipelineStage[] => {
    const pipeline: PipelineStage[] = [];

    if (search) {
        const regex = { $regex: search, $options: "i" };
        pipeline.push({
            $match: {
                $or: [
                    { title: regex },
                    { address: regex },
                ],
            },
        });
    }

    pipeline.push({
        $addFields: {
            normalizedTitle: {
                $toUpper: { $ifNull: ["$title", ""] },
            },
            categorySortOrder: {
                $switch: {
                    branches: [
                        { case: { $eq: ["$category", EXHIBITION_CATEGORY.PLATINUM] }, then: 1 },
                        { case: { $eq: ["$category", EXHIBITION_CATEGORY.GOLD] }, then: 2 },
                        { case: { $eq: ["$category", EXHIBITION_CATEGORY.SILVER] }, then: 3 },
                    ],
                    default: 4,
                },
            },
        },
    });

    pipeline.push({
        $sort: {
            categorySortOrder: 1,
            normalizedTitle: 1,
        },
    });

    if (userId) {
        pipeline.push({
            $lookup: {
                from: "chats",
                let: { exhibitorId: "$exhibitor" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $in: ["$$exhibitorId", "$participants"] },
                                    { $in: [new Types.ObjectId(userId), "$participants"] },
                                ],
                            },
                        },
                    },
                    { $project: { _id: 1 } },
                ],
                as: "chatInfo",
            },
        });

        pipeline.push({
            $addFields: {
                chatId: { $arrayElemAt: ["$chatInfo._id", 0] },
            },
        });

        pipeline.push({
            $unset: ["chatInfo"],
        });
    }

    pipeline.push({
        $lookup: {
            from: "users",
            let: { exhibitorId: "$exhibitor" },
            pipeline: [
                { $match: { $expr: { $eq: ["$_id", "$$exhibitorId"] } } },
                { $project: { name: 1, email: 1 } },
            ],
            as: "exhibitor",
        },
    });

    pipeline.push({
        $unwind: {
            path: "$exhibitor",
            preserveNullAndEmptyArrays: true,
        },
    });

    pipeline.push({
        $unset: ["normalizedTitle", "categorySortOrder"],
    });

    return pipeline;
};

// export const getAllExhibitionsQuery = (
//     search: string = "",
// ): PipelineStage[] => {
//     const pipeline: PipelineStage[] = [];

//     if (search) {
//         const regex = { $regex: search, $options: "i" };
//         pipeline.push({
//             $match: {
//                 $or: [
//                     { title: regex },
//                     { address: regex },
//                 ],
//             },
//         });
//     }

//     pipeline.push({
//         $addFields: {
//             normalizedTitle: {
//                 $toUpper: { $ifNull: ["$title", ""] },
//             },
//         },
//     });

//     pipeline.push({
//         $sort: {
//             normalizedTitle: 1,
//         },
//     });

//     pipeline.push({
//         $unset: ["normalizedTitle"],
//     });

//     return pipeline;
// };

// import { PipelineStage, Types } from "mongoose";

// export const getAllExhibitionsQuery = (
//     search: string = "",
//     favoriteExhibitionIds: Types.ObjectId[] = []
// ): PipelineStage[] => {
//     const pipeline: PipelineStage[] = [];

//     if (search) {
//         const regex = { $regex: search, $options: 'i' };
//         pipeline.push({
//             $match: {
//                 $or: [
//                     { title: regex },
//                     { address: regex },
//                 ]
//             }
//         });
//     }

//     pipeline.push({
//         $addFields: {
//             isFavorite: {
//                 $cond: [
//                     { $in: ['$_id', favoriteExhibitionIds] },
//                     1,
//                     0
//                 ]
//             }
//         }
//     });

//     pipeline.push({
//         $sort: {
//             isFavorite: -1,
//             createdAt: -1
//         }
//     });

//     return pipeline;
// };  
