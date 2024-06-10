/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

export interface ComplexPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The iNum property
     */
    iNum?: UntypedNode;
    /**
     * The realNum property
     */
    realNum?: UntypedNode;
    /**
     * The suffix property
     */
    suffix?: UntypedNode;
}
/**
 * Provides operations to call the complex method.
 */
export interface ComplexRequestBuilder extends BaseRequestBuilder<ComplexRequestBuilder> {
    /**
     * Invoke action complex
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ComplexPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action complex
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ComplexPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ComplexPostRequestBody}
 */
export function createComplexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoComplexPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoComplexPostRequestBody(complexPostRequestBody: Partial<ComplexPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "iNum": n => { complexPostRequestBody.iNum = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "realNum": n => { complexPostRequestBody.realNum = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "suffix": n => { complexPostRequestBody.suffix = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeComplexPostRequestBody(writer: SerializationWriter, complexPostRequestBody: Partial<ComplexPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("iNum", complexPostRequestBody.iNum);
    writer.writeObjectValue("realNum", complexPostRequestBody.realNum);
    writer.writeObjectValue("suffix", complexPostRequestBody.suffix);
    writer.writeAdditionalData(complexPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ComplexRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/complex";
/**
 * Metadata for all the requests in the request builder.
 */
export const ComplexRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ComplexRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeComplexPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
