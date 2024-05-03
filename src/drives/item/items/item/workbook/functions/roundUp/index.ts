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
 * @returns {RoundUpPostRequestBody}
 */
export function createRoundUpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRoundUpPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRoundUpPostRequestBody(roundUpPostRequestBody: Partial<RoundUpPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { roundUpPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numDigits": n => { roundUpPostRequestBody.numDigits = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface RoundUpPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number property
     */
    number?: Json;
    /**
     * The numDigits property
     */
    numDigits?: Json;
}
/**
 * Provides operations to call the roundUp method.
 */
export interface RoundUpRequestBuilder extends BaseRequestBuilder<RoundUpRequestBuilder> {
    /**
     * Invoke action roundUp
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RoundUpPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action roundUp
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RoundUpPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRoundUpPostRequestBody(writer: SerializationWriter, roundUpPostRequestBody: Partial<RoundUpPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("number", roundUpPostRequestBody.number, serializeJson);
    writer.writeObjectValue<Json>("numDigits", roundUpPostRequestBody.numDigits, serializeJson);
    writer.writeAdditionalData(roundUpPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RoundUpRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/roundUp";
/**
 * Metadata for all the requests in the request builder.
 */
export const RoundUpRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RoundUpRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRoundUpPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
