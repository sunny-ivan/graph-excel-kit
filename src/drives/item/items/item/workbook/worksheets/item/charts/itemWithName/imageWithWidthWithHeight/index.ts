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
 * @returns {ImageWithWidthWithHeightGetResponse}
 */
export function createImageWithWidthWithHeightGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImageWithWidthWithHeightGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoImageWithWidthWithHeightGetResponse(imageWithWidthWithHeightGetResponse: Partial<ImageWithWidthWithHeightGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthWithHeightGetResponse.value = n.getStringValue(); },
    }
}
export interface ImageWithWidthWithHeightGetResponse extends AdditionalDataHolder, Parsable {
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
export interface ImageWithWidthWithHeightRequestBuilder extends BaseRequestBuilder<ImageWithWidthWithHeightRequestBuilder> {
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImageWithWidthWithHeightGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImageWithWidthWithHeightGetResponse | undefined>;
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
export function serializeImageWithWidthWithHeightGetResponse(writer: SerializationWriter, imageWithWidthWithHeightGetResponse: Partial<ImageWithWidthWithHeightGetResponse> | undefined = {}) : void {
    writer.writeStringValue("value", imageWithWidthWithHeightGetResponse.value);
    writer.writeAdditionalData(imageWithWidthWithHeightGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImageWithWidthWithHeightRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/item(name='{name}')/image(width={width},height={height})";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImageWithWidthWithHeightRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ImageWithWidthWithHeightRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImageWithWidthWithHeightGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
