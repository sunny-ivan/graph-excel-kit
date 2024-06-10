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
 * @returns {RatePostRequestBody}
 */
export function createRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRatePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRatePostRequestBody(ratePostRequestBody: Partial<RatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { ratePostRequestBody.fv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "guess": n => { ratePostRequestBody.guess = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "nper": n => { ratePostRequestBody.nper = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pmt": n => { ratePostRequestBody.pmt = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pv": n => { ratePostRequestBody.pv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "type": n => { ratePostRequestBody.type = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface RatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fv property
     */
    fv?: UntypedNode;
    /**
     * The guess property
     */
    guess?: UntypedNode;
    /**
     * The nper property
     */
    nper?: UntypedNode;
    /**
     * The pmt property
     */
    pmt?: UntypedNode;
    /**
     * The pv property
     */
    pv?: UntypedNode;
    /**
     * The type property
     */
    type?: UntypedNode;
}
/**
 * Provides operations to call the rate method.
 */
export interface RateRequestBuilder extends BaseRequestBuilder<RateRequestBuilder> {
    /**
     * Invoke action rate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action rate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRatePostRequestBody(writer: SerializationWriter, ratePostRequestBody: Partial<RatePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("fv", ratePostRequestBody.fv);
    writer.writeObjectValue("guess", ratePostRequestBody.guess);
    writer.writeObjectValue("nper", ratePostRequestBody.nper);
    writer.writeObjectValue("pmt", ratePostRequestBody.pmt);
    writer.writeObjectValue("pv", ratePostRequestBody.pv);
    writer.writeObjectValue("type", ratePostRequestBody.type);
    writer.writeAdditionalData(ratePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RateRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/rate";
/**
 * Metadata for all the requests in the request builder.
 */
export const RateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
