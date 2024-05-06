/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WeekdayPostRequestBody}
 */
export function createWeekdayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWeekdayPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoWeekdayPostRequestBody(weekdayPostRequestBody: Partial<WeekdayPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "returnType": n => { weekdayPostRequestBody.returnType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "serialNumber": n => { weekdayPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeWeekdayPostRequestBody(writer: SerializationWriter, weekdayPostRequestBody: Partial<WeekdayPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("returnType", weekdayPostRequestBody.returnType, serializeJson);
    writer.writeObjectValue<Json>("serialNumber", weekdayPostRequestBody.serialNumber, serializeJson);
    writer.writeAdditionalData(weekdayPostRequestBody.additionalData);
}
export interface WeekdayPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The returnType property
     */
    returnType?: Json;
    /**
     * The serialNumber property
     */
    serialNumber?: Json;
}
/**
 * Provides operations to call the weekday method.
 */
export interface WeekdayRequestBuilder extends BaseRequestBuilder<WeekdayRequestBuilder> {
    /**
     * Invoke action weekday
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WeekdayPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action weekday
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WeekdayPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WeekdayRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/weekday";
/**
 * Metadata for all the requests in the request builder.
 */
export const WeekdayRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: WeekdayRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWeekdayPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */