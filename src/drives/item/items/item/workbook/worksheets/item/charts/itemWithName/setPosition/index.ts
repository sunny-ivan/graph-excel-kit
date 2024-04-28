/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, serializeJson, type Json } from '../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SetPositionPostRequestBody}
 */
export function createSetPositionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSetPositionPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoSetPositionPostRequestBody(setPositionPostRequestBody: Partial<SetPositionPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endCell": n => { setPositionPostRequestBody.endCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startCell": n => { setPositionPostRequestBody.startCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSetPositionPostRequestBody(writer: SerializationWriter, setPositionPostRequestBody: Partial<SetPositionPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("endCell", setPositionPostRequestBody.endCell, serializeJson);
    writer.writeObjectValue<Json>("startCell", setPositionPostRequestBody.startCell, serializeJson);
    writer.writeAdditionalData(setPositionPostRequestBody.additionalData);
}
export interface SetPositionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endCell property
     */
    endCell?: Json;
    /**
     * The startCell property
     */
    startCell?: Json;
}
/**
 * Provides operations to call the setPosition method.
 */
export interface SetPositionRequestBuilder extends BaseRequestBuilder<SetPositionRequestBuilder> {
    /**
     * Positions the chart relative to cells on the worksheet.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/chart-setposition?view=graph-rest-1.0|Find more info here}
     */
     post(body: SetPositionPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Positions the chart relative to cells on the worksheet.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SetPositionPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SetPositionRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/item(name='{name}')/setPosition";
/**
 * Metadata for all the requests in the request builder.
 */
export const SetPositionRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SetPositionRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSetPositionPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
