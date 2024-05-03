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
 * @returns {RandBetweenPostRequestBody}
 */
export function createRandBetweenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRandBetweenPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRandBetweenPostRequestBody(randBetweenPostRequestBody: Partial<RandBetweenPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bottom": n => { randBetweenPostRequestBody.bottom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "top": n => { randBetweenPostRequestBody.top = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface RandBetweenPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bottom property
     */
    bottom?: Json;
    /**
     * The top property
     */
    top?: Json;
}
/**
 * Provides operations to call the randBetween method.
 */
export interface RandBetweenRequestBuilder extends BaseRequestBuilder<RandBetweenRequestBuilder> {
    /**
     * Invoke action randBetween
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RandBetweenPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action randBetween
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RandBetweenPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRandBetweenPostRequestBody(writer: SerializationWriter, randBetweenPostRequestBody: Partial<RandBetweenPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("bottom", randBetweenPostRequestBody.bottom, serializeJson);
    writer.writeObjectValue<Json>("top", randBetweenPostRequestBody.top, serializeJson);
    writer.writeAdditionalData(randBetweenPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RandBetweenRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/randBetween";
/**
 * Metadata for all the requests in the request builder.
 */
export const RandBetweenRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RandBetweenRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRandBetweenPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
