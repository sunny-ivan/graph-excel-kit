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
 * @returns {DstDevPPostRequestBody}
 */
export function createDstDevPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDstDevPPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDstDevPPostRequestBody(dstDevPPostRequestBody: Partial<DstDevPPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dstDevPPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dstDevPPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dstDevPPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface DstDevPPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria property
     */
    criteria?: Json;
    /**
     * The database property
     */
    database?: Json;
    /**
     * The field property
     */
    field?: Json;
}
/**
 * Provides operations to call the dstDevP method.
 */
export interface DstDevPRequestBuilder extends BaseRequestBuilder<DstDevPRequestBuilder> {
    /**
     * Invoke action dstDevP
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DstDevPPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action dstDevP
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DstDevPPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDstDevPPostRequestBody(writer: SerializationWriter, dstDevPPostRequestBody: Partial<DstDevPPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("criteria", dstDevPPostRequestBody.criteria, serializeJson);
    writer.writeObjectValue<Json>("database", dstDevPPostRequestBody.database, serializeJson);
    writer.writeObjectValue<Json>("field", dstDevPPostRequestBody.field, serializeJson);
    writer.writeAdditionalData(dstDevPPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DstDevPRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/dstDevP";
/**
 * Metadata for all the requests in the request builder.
 */
export const DstDevPRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DstDevPRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDstDevPPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
