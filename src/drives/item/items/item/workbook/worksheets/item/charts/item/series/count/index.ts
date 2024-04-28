/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CountGetResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: number;
}
/**
 * Provides operations to call the count method.
 */
export interface CountRequestBuilder extends BaseRequestBuilder<CountRequestBuilder> {
    /**
     * Invoke function count
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CountGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CountGetResponse | undefined>;
    /**
     * Invoke function count
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CountGetResponse}
 */
export function createCountGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCountGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoCountGetResponse(countGetResponse: Partial<CountGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { countGetResponse.value = n.getNumberValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCountGetResponse(writer: SerializationWriter, countGetResponse: Partial<CountGetResponse> | undefined = {}) : void {
    writer.writeNumberValue("value", countGetResponse.value);
    writer.writeAdditionalData(countGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CountRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/count()";
/**
 * Metadata for all the requests in the request builder.
 */
export const CountRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CountRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCountGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
