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
 * @returns {F_Dist_RTPostRequestBody}
 */
export function createF_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoF_Dist_RTPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoF_Dist_RTPostRequestBody(f_Dist_RTPostRequestBody: Partial<F_Dist_RTPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom1": n => { f_Dist_RTPostRequestBody.degFreedom1 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "degFreedom2": n => { f_Dist_RTPostRequestBody.degFreedom2 = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "x": n => { f_Dist_RTPostRequestBody.x = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface F_Dist_RTPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The degFreedom1 property
     */
    degFreedom1?: UntypedNode;
    /**
     * The degFreedom2 property
     */
    degFreedom2?: UntypedNode;
    /**
     * The x property
     */
    x?: UntypedNode;
}
/**
 * Provides operations to call the f_Dist_RT method.
 */
export interface F_Dist_RTRequestBuilder extends BaseRequestBuilder<F_Dist_RTRequestBuilder> {
    /**
     * Invoke action f_Dist_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: F_Dist_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action f_Dist_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: F_Dist_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeF_Dist_RTPostRequestBody(writer: SerializationWriter, f_Dist_RTPostRequestBody: Partial<F_Dist_RTPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("degFreedom1", f_Dist_RTPostRequestBody.degFreedom1);
    writer.writeObjectValue("degFreedom2", f_Dist_RTPostRequestBody.degFreedom2);
    writer.writeObjectValue("x", f_Dist_RTPostRequestBody.x);
    writer.writeAdditionalData(f_Dist_RTPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const F_Dist_RTRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/f_Dist_RT";
/**
 * Metadata for all the requests in the request builder.
 */
export const F_Dist_RTRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: F_Dist_RTRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeF_Dist_RTPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
