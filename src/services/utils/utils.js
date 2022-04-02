/**
 * Converts bytes to a more readable format
 * @param bytes
 * @param decimals
 * @return {string}
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1000; // 1024
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**dxs f   
 * Converts source number to KB
 * @param source
 * @param format 'GB', 'TB', etc
 */
function convertToKB(source, format) {
    switch (format) {
        case 'GB':
            return source * Math.pow(10, 6);
    }
}

export {formatBytes, convertToKB};