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
 * @returns {ReptPostRequestBody}
 */
export function createReptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoReptPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoReptPostRequestBody(reptPostRequestBody: Partial<ReptPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "numberTimes": n => { reptPostRequestBody.numberTimes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { reptPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface ReptPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The numberTimes property
     */
    numberTimes?: Json;
    /**
     * The text property
     */
    text?: Json;
}
/**
 * Provides operations to call the rept method.
 */
export interface ReptRequestBuilder extends BaseRequestBuilder<ReptRequestBuilder> {
    /**
     * Invoke action rept
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ReptPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action rept
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ReptPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeReptPostRequestBody(writer: SerializationWriter, reptPostRequestBody: Partial<ReptPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("numberTimes", reptPostRequestBody.numberTimes, serializeJson);
    writer.writeObjectValue<Json>("text", reptPostRequestBody.text, serializeJson);
    writer.writeAdditionalData(reptPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ReptRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/rept";
/**
 * Metadata for all the requests in the request builder.
 */
export const ReptRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ReptRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeReptPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
