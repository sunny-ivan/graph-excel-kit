/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApplyCustomFilterPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria1 property
     */
    criteria1?: string;
    /**
     * The criteria2 property
     */
    criteria2?: string;
    /**
     * The oper property
     */
    oper?: string;
}
/**
 * Provides operations to call the applyCustomFilter method.
 */
export interface ApplyCustomFilterRequestBuilder extends BaseRequestBuilder<ApplyCustomFilterRequestBuilder> {
    /**
     * Invoke action applyCustomFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ApplyCustomFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action applyCustomFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyCustomFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyCustomFilterPostRequestBody}
 */
export function createApplyCustomFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyCustomFilterPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoApplyCustomFilterPostRequestBody(applyCustomFilterPostRequestBody: Partial<ApplyCustomFilterPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria1": n => { applyCustomFilterPostRequestBody.criteria1 = n.getStringValue(); },
        "criteria2": n => { applyCustomFilterPostRequestBody.criteria2 = n.getStringValue(); },
        "oper": n => { applyCustomFilterPostRequestBody.oper = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeApplyCustomFilterPostRequestBody(writer: SerializationWriter, applyCustomFilterPostRequestBody: Partial<ApplyCustomFilterPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("criteria1", applyCustomFilterPostRequestBody.criteria1);
    writer.writeStringValue("criteria2", applyCustomFilterPostRequestBody.criteria2);
    writer.writeStringValue("oper", applyCustomFilterPostRequestBody.oper);
    writer.writeAdditionalData(applyCustomFilterPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ApplyCustomFilterRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter/applyCustomFilter";
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplyCustomFilterRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ApplyCustomFilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyCustomFilterPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
