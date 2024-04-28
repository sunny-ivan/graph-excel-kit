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
 * @returns {Rank_AvgPostRequestBody}
 */
export function createRank_AvgPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRank_AvgPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRank_AvgPostRequestBody(rank_AvgPostRequestBody: Partial<Rank_AvgPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { rank_AvgPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "order": n => { rank_AvgPostRequestBody.order = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "ref": n => { rank_AvgPostRequestBody.ref = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface Rank_AvgPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number property
     */
    number?: Json;
    /**
     * The order property
     */
    order?: Json;
    /**
     * The ref property
     */
    ref?: Json;
}
/**
 * Provides operations to call the rank_Avg method.
 */
export interface Rank_AvgRequestBuilder extends BaseRequestBuilder<Rank_AvgRequestBuilder> {
    /**
     * Invoke action rank_Avg
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Rank_AvgPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action rank_Avg
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Rank_AvgPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRank_AvgPostRequestBody(writer: SerializationWriter, rank_AvgPostRequestBody: Partial<Rank_AvgPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("number", rank_AvgPostRequestBody.number, serializeJson);
    writer.writeObjectValue<Json>("order", rank_AvgPostRequestBody.order, serializeJson);
    writer.writeObjectValue<Json>("ref", rank_AvgPostRequestBody.ref, serializeJson);
    writer.writeAdditionalData(rank_AvgPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Rank_AvgRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/rank_Avg";
/**
 * Metadata for all the requests in the request builder.
 */
export const Rank_AvgRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Rank_AvgRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRank_AvgPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
