/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

export interface Binom_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: UntypedNode;
    /**
     * The numberS property
     */
    numberS?: UntypedNode;
    /**
     * The probabilityS property
     */
    probabilityS?: UntypedNode;
    /**
     * The trials property
     */
    trials?: UntypedNode;
}
/**
 * Provides operations to call the binom_Dist method.
 */
export interface Binom_DistRequestBuilder extends BaseRequestBuilder<Binom_DistRequestBuilder> {
    /**
     * Invoke action binom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Binom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action binom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Binom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Binom_DistPostRequestBody}
 */
export function createBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBinom_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoBinom_DistPostRequestBody(binom_DistPostRequestBody: Partial<Binom_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { binom_DistPostRequestBody.cumulative = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "numberS": n => { binom_DistPostRequestBody.numberS = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "probabilityS": n => { binom_DistPostRequestBody.probabilityS = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "trials": n => { binom_DistPostRequestBody.trials = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBinom_DistPostRequestBody(writer: SerializationWriter, binom_DistPostRequestBody: Partial<Binom_DistPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("cumulative", binom_DistPostRequestBody.cumulative);
    writer.writeObjectValue("numberS", binom_DistPostRequestBody.numberS);
    writer.writeObjectValue("probabilityS", binom_DistPostRequestBody.probabilityS);
    writer.writeObjectValue("trials", binom_DistPostRequestBody.trials);
    writer.writeAdditionalData(binom_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Binom_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/binom_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const Binom_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Binom_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBinom_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
