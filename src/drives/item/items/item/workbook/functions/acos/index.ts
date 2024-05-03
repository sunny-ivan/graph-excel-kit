/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AcosPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number property
     */
    number?: Json;
}
/**
 * Provides operations to call the acos method.
 */
export interface AcosRequestBuilder extends BaseRequestBuilder<AcosRequestBuilder> {
    /**
     * Invoke action acos
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AcosPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action acos
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AcosPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AcosPostRequestBody}
 */
export function createAcosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAcosPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAcosPostRequestBody(acosPostRequestBody: Partial<AcosPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acosPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAcosPostRequestBody(writer: SerializationWriter, acosPostRequestBody: Partial<AcosPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("number", acosPostRequestBody.number, serializeJson);
    writer.writeAdditionalData(acosPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AcosRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/acos";
/**
 * Metadata for all the requests in the request builder.
 */
export const AcosRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AcosRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAcosPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
