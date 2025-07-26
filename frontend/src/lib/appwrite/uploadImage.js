import { ID,ImageGravity } from "appwrite";
import { appwriteConfig, storage } from "./config";


export async function uploadFile(file) {
    try {
        const uploadedFile=await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        )
        return uploadedFile;
    } catch (error) {
        console.log(error);
    }
}

export async function getFilePreview(fileId){
    try {
        const fileUrl=`https://fra.cloud.appwrite.io/v1/storage/buckets/${fileId.bucketId}/files/${fileId.$id}/download?project=67c5ee04002f5e1e4db1`

        if(!fileUrl) throw Error;
        return fileUrl;
    } catch (error) {
        console.log(error);
    }
}