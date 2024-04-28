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
 * @returns {ErfC_PrecisePostRequestBody}
 */
export function createErfC_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoErfC_PrecisePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoErfC_PrecisePostRequestBody(erfC_PrecisePostRequestBody: Partial<ErfC_PrecisePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { erfC_PrecisePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface ErfC_PrecisePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The X property
     */
    x?: Json;
}
/**
 * Provides operations to call the erfC_Precise method.
 */
export interface ErfC_PreciseRequestBuilder extends BaseRequestBuilder<ErfC_PreciseRequestBuilder> {
    /**
     * Invoke action erfC_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ErfC_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action erfC_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ErfC_PrecisePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeErfC_PrecisePostRequestBody(writer: SerializationWriter, erfC_PrecisePostRequestBody: Partial<ErfC_PrecisePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("X", erfC_PrecisePostRequestBody.x, serializeJson);
    writer.writeAdditionalData(erfC_PrecisePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ErfC_PreciseRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/erfC_Precise";
/**
 * Metadata for all the requests in the request builder.
 */
export const ErfC_PreciseRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ErfC_PreciseRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeErfC_PrecisePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
