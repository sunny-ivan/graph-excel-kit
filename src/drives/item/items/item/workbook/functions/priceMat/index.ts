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
 * @returns {PriceMatPostRequestBody}
 */
export function createPriceMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPriceMatPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoPriceMatPostRequestBody(priceMatPostRequestBody: Partial<PriceMatPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { priceMatPostRequestBody.basis = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "issue": n => { priceMatPostRequestBody.issue = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "maturity": n => { priceMatPostRequestBody.maturity = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "rate": n => { priceMatPostRequestBody.rate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "settlement": n => { priceMatPostRequestBody.settlement = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "yld": n => { priceMatPostRequestBody.yld = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface PriceMatPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: UntypedNode;
    /**
     * The issue property
     */
    issue?: UntypedNode;
    /**
     * The maturity property
     */
    maturity?: UntypedNode;
    /**
     * The rate property
     */
    rate?: UntypedNode;
    /**
     * The settlement property
     */
    settlement?: UntypedNode;
    /**
     * The yld property
     */
    yld?: UntypedNode;
}
/**
 * Provides operations to call the priceMat method.
 */
export interface PriceMatRequestBuilder extends BaseRequestBuilder<PriceMatRequestBuilder> {
    /**
     * Invoke action priceMat
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PriceMatPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action priceMat
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PriceMatPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePriceMatPostRequestBody(writer: SerializationWriter, priceMatPostRequestBody: Partial<PriceMatPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("basis", priceMatPostRequestBody.basis);
    writer.writeObjectValue("issue", priceMatPostRequestBody.issue);
    writer.writeObjectValue("maturity", priceMatPostRequestBody.maturity);
    writer.writeObjectValue("rate", priceMatPostRequestBody.rate);
    writer.writeObjectValue("settlement", priceMatPostRequestBody.settlement);
    writer.writeObjectValue("yld", priceMatPostRequestBody.yld);
    writer.writeAdditionalData(priceMatPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const PriceMatRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/priceMat";
/**
 * Metadata for all the requests in the request builder.
 */
export const PriceMatRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PriceMatRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePriceMatPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
