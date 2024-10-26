/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
export class V1AzureFileVolumeSource {
    /**
    * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    /**
    * secretName is the  name of secret that contains Azure Storage Account Name and Key
    */
    'secretName': string;
    /**
    * shareName is the azure share Name
    */
    'shareName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        },
        {
            "name": "shareName",
            "baseName": "shareName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1AzureFileVolumeSource.attributeTypeMap;
    }
}

