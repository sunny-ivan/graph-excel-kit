/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

export interface ApplyValuesFilterPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The values property
     */
    values?: UntypedNode;
}
/**
 * Provides operations to call the applyValuesFilter method.
 */
export interface ApplyValuesFilterRequestBuilder extends BaseRequestBuilder<ApplyValuesFilterRequestBuilder> {
    /**
     * Invoke action applyValuesFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ApplyValuesFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action applyValuesFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyValuesFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyValuesFilterPostRequestBody}
 */
export function createApplyValuesFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyValuesFilterPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoApplyValuesFilterPostRequestBody(applyValuesFilterPostRequestBody: Partial<ApplyValuesFilterPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { applyValuesFilterPostRequestBody.values = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeApplyValuesFilterPostRequestBody(writer: SerializationWriter, applyValuesFilterPostRequestBody: Partial<ApplyValuesFilterPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("values", applyValuesFilterPostRequestBody.values);
    writer.writeAdditionalData(applyValuesFilterPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ApplyValuesFilterRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter/applyValuesFilter";
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplyValuesFilterRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ApplyValuesFilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyValuesFilterPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
