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
import { V1DownwardAPIVolumeFile } from './v1DownwardAPIVolumeFile';

/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
export class V1DownwardAPIProjection {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<V1DownwardAPIVolumeFile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>"
        }    ];

    static getAttributeTypeMap() {
        return V1DownwardAPIProjection.attributeTypeMap;
    }
}

