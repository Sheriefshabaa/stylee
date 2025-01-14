const path = require("node:path");
const fs  =  require("node:fs");

exports.deleteImage = (targetDir, targetFile) => {
    const filePath = path.join(__dirname, '..', 'uploads', targetDir, targetFile);
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting image file: ${err}`)
        }
        return true;
    })

}
