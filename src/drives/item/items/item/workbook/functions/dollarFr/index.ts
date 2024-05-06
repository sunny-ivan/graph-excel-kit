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
 * @returns {DollarFrPostRequestBody}
 */
export function createDollarFrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDollarFrPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDollarFrPostRequestBody(dollarFrPostRequestBody: Partial<DollarFrPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalDollar": n => { dollarFrPostRequestBody.decimalDollar = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "fraction": n => { dollarFrPostRequestBody.fraction = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface DollarFrPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The decimalDollar property
     */
    decimalDollar?: Json;
    /**
     * The fraction property
     */
    fraction?: Json;
}
/**
 * Provides operations to call the dollarFr method.
 */
export interface DollarFrRequestBuilder extends BaseRequestBuilder<DollarFrRequestBuilder> {
    /**
     * Invoke action dollarFr
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DollarFrPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action dollarFr
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DollarFrPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDollarFrPostRequestBody(writer: SerializationWriter, dollarFrPostRequestBody: Partial<DollarFrPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("decimalDollar", dollarFrPostRequestBody.decimalDollar, serializeJson);
    writer.writeObjectValue<Json>("fraction", dollarFrPostRequestBody.fraction, serializeJson);
    writer.writeAdditionalData(dollarFrPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DollarFrRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/dollarFr";
/**
 * Metadata for all the requests in the request builder.
 */
export const DollarFrRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DollarFrRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDollarFrPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */