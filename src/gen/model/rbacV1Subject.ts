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
* Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
*/
export class RbacV1Subject {
    /**
    * APIGroup holds the API group of the referenced subject. Defaults to \"\" for ServiceAccount subjects. Defaults to \"rbac.authorization.k8s.io\" for User and Group subjects.
    */
    'apiGroup'?: string;
    /**
    * Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
    */
    'kind': string;
    /**
    * Name of the object being referenced.
    */
    'name': string;
    /**
    * Namespace of the referenced object.  If the object kind is non-namespace, such as \"User\" or \"Group\", and this value is not empty the Authorizer should report an error.
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RbacV1Subject.attributeTypeMap;
    }
}

