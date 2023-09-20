/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* IPBlock describes a particular CIDR (Ex. \"192.168.1.0/24\",\"2001:db8::/64\") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.
*/
export class V1IPBlock {
    /**
    * cidr is a string representing the IPBlock Valid examples are \"192.168.1.0/24\" or \"2001:db8::/64\"
    */
    'cidr': string;
    /**
    * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are \"192.168.1.0/24\" or \"2001:db8::/64\" Except values will be rejected if they are outside the cidr range
    */
    'except'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cidr",
            "baseName": "cidr",
            "type": "string"
        },
        {
            "name": "except",
            "baseName": "except",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1IPBlock.attributeTypeMap;
    }
}

