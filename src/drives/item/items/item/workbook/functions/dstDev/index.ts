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
 * @returns {DstDevPostRequestBody}
 */
export function createDstDevPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDstDevPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDstDevPostRequestBody(dstDevPostRequestBody: Partial<DstDevPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dstDevPostRequestBody.criteria = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "database": n => { dstDevPostRequestBody.database = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "field": n => { dstDevPostRequestBody.field = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface DstDevPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria property
     */
    criteria?: UntypedNode;
    /**
     * The database property
     */
    database?: UntypedNode;
    /**
     * The field property
     */
    field?: UntypedNode;
}
/**
 * Provides operations to call the dstDev method.
 */
export interface DstDevRequestBuilder extends BaseRequestBuilder<DstDevRequestBuilder> {
    /**
     * Invoke action dstDev
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DstDevPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action dstDev
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DstDevPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDstDevPostRequestBody(writer: SerializationWriter, dstDevPostRequestBody: Partial<DstDevPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("criteria", dstDevPostRequestBody.criteria);
    writer.writeObjectValue("database", dstDevPostRequestBody.database);
    writer.writeObjectValue("field", dstDevPostRequestBody.field);
    writer.writeAdditionalData(dstDevPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DstDevRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/dstDev";
/**
 * Metadata for all the requests in the request builder.
 */
export const DstDevRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DstDevRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDstDevPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
