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
 * @returns {DiscPostRequestBody}
 */
export function createDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDiscPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDiscPostRequestBody(discPostRequestBody: Partial<DiscPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { discPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { discPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { discPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { discPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { discPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface DiscPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json;
    /**
     * The maturity property
     */
    maturity?: Json;
    /**
     * The pr property
     */
    pr?: Json;
    /**
     * The redemption property
     */
    redemption?: Json;
    /**
     * The settlement property
     */
    settlement?: Json;
}
/**
 * Provides operations to call the disc method.
 */
export interface DiscRequestBuilder extends BaseRequestBuilder<DiscRequestBuilder> {
    /**
     * Invoke action disc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DiscPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action disc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DiscPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDiscPostRequestBody(writer: SerializationWriter, discPostRequestBody: Partial<DiscPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("basis", discPostRequestBody.basis, serializeJson);
    writer.writeObjectValue<Json>("maturity", discPostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("pr", discPostRequestBody.pr, serializeJson);
    writer.writeObjectValue<Json>("redemption", discPostRequestBody.redemption, serializeJson);
    writer.writeObjectValue<Json>("settlement", discPostRequestBody.settlement, serializeJson);
    writer.writeAdditionalData(discPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DiscRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/disc";
/**
 * Metadata for all the requests in the request builder.
 */
export const DiscRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DiscRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDiscPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */