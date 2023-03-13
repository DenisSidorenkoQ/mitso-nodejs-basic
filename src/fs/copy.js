import * as fs from "fs/promises";

const FILES_FOLDER_PATH = "files";
const COPY_FOLDER_NAME = "files_copy";

const copy = async () => {
    const filesInActualDir = await fs.readdir("./");
    const filesInDir = await fs.readdir(FILES_FOLDER_PATH);

    if (filesInActualDir.find(fileName => { return fileName === FILES_FOLDER_PATH }) &&
        !filesInDir.find(fileName => { return fileName === COPY_FOLDER_NAME })) {
        await fs.mkdir(FILES_FOLDER_PATH + "/" + COPY_FOLDER_NAME);

        filesInDir.forEach(fileName => {
            fs.copyFile(
                FILES_FOLDER_PATH + "/" + fileName,
                FILES_FOLDER_PATH + "/" + COPY_FOLDER_NAME + "/" + fileName
            );
        })
    } else {
        throw new Error("FS operation failed");
    }
};

await copy();
