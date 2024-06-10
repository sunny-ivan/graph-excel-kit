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
 * @returns {Gamma_DistPostRequestBody}
 */
export function createGamma_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGamma_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGamma_DistPostRequestBody(gamma_DistPostRequestBody: Partial<Gamma_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { gamma_DistPostRequestBody.alpha = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "beta": n => { gamma_DistPostRequestBody.beta = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "cumulative": n => { gamma_DistPostRequestBody.cumulative = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "x": n => { gamma_DistPostRequestBody.x = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface Gamma_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The alpha property
     */
    alpha?: UntypedNode;
    /**
     * The beta property
     */
    beta?: UntypedNode;
    /**
     * The cumulative property
     */
    cumulative?: UntypedNode;
    /**
     * The x property
     */
    x?: UntypedNode;
}
/**
 * Provides operations to call the gamma_Dist method.
 */
export interface Gamma_DistRequestBuilder extends BaseRequestBuilder<Gamma_DistRequestBuilder> {
    /**
     * Invoke action gamma_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Gamma_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action gamma_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Gamma_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGamma_DistPostRequestBody(writer: SerializationWriter, gamma_DistPostRequestBody: Partial<Gamma_DistPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("alpha", gamma_DistPostRequestBody.alpha);
    writer.writeObjectValue("beta", gamma_DistPostRequestBody.beta);
    writer.writeObjectValue("cumulative", gamma_DistPostRequestBody.cumulative);
    writer.writeObjectValue("x", gamma_DistPostRequestBody.x);
    writer.writeAdditionalData(gamma_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Gamma_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/gamma_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const Gamma_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Gamma_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGamma_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
