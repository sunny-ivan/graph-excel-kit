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
 * @returns {ValuePostRequestBody}
 */
export function createValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoValuePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoValuePostRequestBody(valuePostRequestBody: Partial<ValuePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { valuePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeValuePostRequestBody(writer: SerializationWriter, valuePostRequestBody: Partial<ValuePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("text", valuePostRequestBody.text, serializeJson);
    writer.writeAdditionalData(valuePostRequestBody.additionalData);
}
export interface ValuePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The text property
     */
    text?: Json;
}
/**
 * Provides operations to call the value method.
 */
export interface ValueRequestBuilder extends BaseRequestBuilder<ValueRequestBuilder> {
    /**
     * Invoke action value
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ValuePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action value
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ValuePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ValueRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/value";
/**
 * Metadata for all the requests in the request builder.
 */
export const ValueRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ValueRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeValuePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
