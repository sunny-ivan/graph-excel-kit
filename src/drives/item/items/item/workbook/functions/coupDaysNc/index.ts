/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

export interface CoupDaysNcPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: UntypedNode;
    /**
     * The frequency property
     */
    frequency?: UntypedNode;
    /**
     * The maturity property
     */
    maturity?: UntypedNode;
    /**
     * The settlement property
     */
    settlement?: UntypedNode;
}
/**
 * Provides operations to call the coupDaysNc method.
 */
export interface CoupDaysNcRequestBuilder extends BaseRequestBuilder<CoupDaysNcRequestBuilder> {
    /**
     * Invoke action coupDaysNc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CoupDaysNcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action coupDaysNc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CoupDaysNcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CoupDaysNcPostRequestBody}
 */
export function createCoupDaysNcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCoupDaysNcPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoCoupDaysNcPostRequestBody(coupDaysNcPostRequestBody: Partial<CoupDaysNcPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { coupDaysNcPostRequestBody.basis = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "frequency": n => { coupDaysNcPostRequestBody.frequency = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "maturity": n => { coupDaysNcPostRequestBody.maturity = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "settlement": n => { coupDaysNcPostRequestBody.settlement = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCoupDaysNcPostRequestBody(writer: SerializationWriter, coupDaysNcPostRequestBody: Partial<CoupDaysNcPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("basis", coupDaysNcPostRequestBody.basis);
    writer.writeObjectValue("frequency", coupDaysNcPostRequestBody.frequency);
    writer.writeObjectValue("maturity", coupDaysNcPostRequestBody.maturity);
    writer.writeObjectValue("settlement", coupDaysNcPostRequestBody.settlement);
    writer.writeAdditionalData(coupDaysNcPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CoupDaysNcRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/coupDaysNc";
/**
 * Metadata for all the requests in the request builder.
 */
export const CoupDaysNcRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CoupDaysNcRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCoupDaysNcPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
