/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {NPostRequestBody}
 */
export function createNPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoNPostRequestBody(nPostRequestBody: Partial<NPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { nPostRequestBody.value = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface NPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: UntypedNode;
}
/**
 * Provides operations to call the n method.
 */
export interface NRequestBuilder extends BaseRequestBuilder<NRequestBuilder> {
    /**
     * Invoke action n
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: NPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action n
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeNPostRequestBody(writer: SerializationWriter, nPostRequestBody: Partial<NPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("value", nPostRequestBody.value);
    writer.writeAdditionalData(nPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const NRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/n";
/**
 * Metadata for all the requests in the request builder.
 */
export const NRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: NRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
