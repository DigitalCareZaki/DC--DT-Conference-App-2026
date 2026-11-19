import { HttpError } from "../utils/HttpError";
import { GalleryRepository } from "../repositories";
import { getMongoId } from "../utils/helpers";

export class GalleryService {
    async getAllGalleries(queryParams: any) {
        const { page = 1, limit = 10 } = queryParams;
        const pageNum = Number(page);
        const limitNum = Number(limit);
        return GalleryRepository.getAll({
            query: {},
            page: pageNum,
            limit: limitNum,
        });
    }

    async getGalleryById(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, "Invalid Banner ID");

        const gallery = await GalleryRepository.get({ _id: id });
        if (!gallery) throw new HttpError(404, "Banner not found");
        return gallery;
    }

    async createGallery(data: any) {
        if (!data.media) throw new HttpError(400, "Media URL is required");
        return GalleryRepository.create(data);
    }

    async updateGallery(id: string, data: any) {
        if (!getMongoId(id)) throw new HttpError(400, "Invalid Banner ID");
        if (!data.media) throw new HttpError(400, "Media URL is required");

        const gallery = await GalleryRepository.update({ _id: id }, data);
        if (!gallery) throw new HttpError(404, "Banner not found");
        return gallery;
    }

    async deleteGallery(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, "Invalid Banner ID");

        const gallery = await GalleryRepository.delete({ _id: id });
        if (!gallery) throw new HttpError(404, "Banner not found");
        return gallery;
    }
}
