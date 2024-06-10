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
 * @returns {DcountPostRequestBody}
 */
export function createDcountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDcountPostRequestBody;
}
export interface DcountPostRequestBody extends AdditionalDataHolder, Parsable {
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
 * Provides operations to call the dcount method.
 */
export interface DcountRequestBuilder extends BaseRequestBuilder<DcountRequestBuilder> {
    /**
     * Invoke action dcount
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DcountPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action dcount
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DcountPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDcountPostRequestBody(dcountPostRequestBody: Partial<DcountPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dcountPostRequestBody.criteria = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "database": n => { dcountPostRequestBody.database = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "field": n => { dcountPostRequestBody.field = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDcountPostRequestBody(writer: SerializationWriter, dcountPostRequestBody: Partial<DcountPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("criteria", dcountPostRequestBody.criteria);
    writer.writeObjectValue("database", dcountPostRequestBody.database);
    writer.writeObjectValue("field", dcountPostRequestBody.field);
    writer.writeAdditionalData(dcountPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DcountRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/dcount";
/**
 * Metadata for all the requests in the request builder.
 */
export const DcountRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DcountRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDcountPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
