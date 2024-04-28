/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FindBPostRequestBody}
 */
export function createFindBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFindBPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoFindBPostRequestBody(findBPostRequestBody: Partial<FindBPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "findText": n => { findBPostRequestBody.findText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { findBPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "withinText": n => { findBPostRequestBody.withinText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface FindBPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The findText property
     */
    findText?: Json;
    /**
     * The startNum property
     */
    startNum?: Json;
    /**
     * The withinText property
     */
    withinText?: Json;
}
/**
 * Provides operations to call the findB method.
 */
export interface FindBRequestBuilder extends BaseRequestBuilder<FindBRequestBuilder> {
    /**
     * Invoke action findB
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: FindBPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action findB
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FindBPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeFindBPostRequestBody(writer: SerializationWriter, findBPostRequestBody: Partial<FindBPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("findText", findBPostRequestBody.findText, serializeJson);
    writer.writeObjectValue<Json>("startNum", findBPostRequestBody.startNum, serializeJson);
    writer.writeObjectValue<Json>("withinText", findBPostRequestBody.withinText, serializeJson);
    writer.writeAdditionalData(findBPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const FindBRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/findB";
/**
 * Metadata for all the requests in the request builder.
 */
export const FindBRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: FindBRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFindBPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
