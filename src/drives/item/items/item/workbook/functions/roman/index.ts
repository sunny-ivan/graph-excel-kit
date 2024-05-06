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
 * @returns {RomanPostRequestBody}
 */
export function createRomanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRomanPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRomanPostRequestBody(romanPostRequestBody: Partial<RomanPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "form": n => { romanPostRequestBody.form = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { romanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface RomanPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The form property
     */
    form?: Json;
    /**
     * The number property
     */
    number?: Json;
}
/**
 * Provides operations to call the roman method.
 */
export interface RomanRequestBuilder extends BaseRequestBuilder<RomanRequestBuilder> {
    /**
     * Invoke action roman
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RomanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action roman
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RomanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRomanPostRequestBody(writer: SerializationWriter, romanPostRequestBody: Partial<RomanPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("form", romanPostRequestBody.form, serializeJson);
    writer.writeObjectValue<Json>("number", romanPostRequestBody.number, serializeJson);
    writer.writeAdditionalData(romanPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RomanRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/roman";
/**
 * Metadata for all the requests in the request builder.
 */
export const RomanRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RomanRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRomanPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */