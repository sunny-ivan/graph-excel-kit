/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ImageWithWidthGetResponse}
 */
export function createImageWithWidthGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImageWithWidthGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoImageWithWidthGetResponse(imageWithWidthGetResponse: Partial<ImageWithWidthGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthGetResponse.value = n.getStringValue(); },
    }
}
export interface ImageWithWidthGetResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: string;
}
/**
 * Provides operations to call the image method.
 */
export interface ImageWithWidthRequestBuilder extends BaseRequestBuilder<ImageWithWidthRequestBuilder> {
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImageWithWidthGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImageWithWidthGetResponse | undefined>;
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeImageWithWidthGetResponse(writer: SerializationWriter, imageWithWidthGetResponse: Partial<ImageWithWidthGetResponse> | undefined = {}) : void {
    writer.writeStringValue("value", imageWithWidthGetResponse.value);
    writer.writeAdditionalData(imageWithWidthGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImageWithWidthRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/item(name='{name}')/image(width={width})";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImageWithWidthRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ImageWithWidthRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImageWithWidthGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
