import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TransformToBase{
    public base64toBlob(base64Data, contentType) {
        contentType = contentType || "";
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {
            type: contentType
        });
    }

    public transformToBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            return reader.result;
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }

    public transformToBase64Promise(file) {
        let promise = new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                var result = reader.result;
                resolve(result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
        return promise;
    }
}